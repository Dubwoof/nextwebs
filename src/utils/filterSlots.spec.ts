import { filterSlots } from './filterSlots';
import { describe, it, expect } from 'vitest';

const region = 'BY';

const expectedSlots = [
  { start: new Date('2024-04-02T09:00:00'), end: new Date('2024-04-02T10:00:00') }, // Di
  { start: new Date('2024-04-03T09:00:00'), end: new Date('2024-04-03T10:00:00') }, // Mi
  { start: new Date('2024-04-04T09:00:00'), end: new Date('2024-04-04T10:00:00') }, // Do
  { start: new Date('2024-04-05T09:00:00'), end: new Date('2024-04-05T10:00:00') }, // Fr
  { start: new Date('2024-04-08T09:00:00'), end: new Date('2024-04-08T10:00:00') }, // Mo
];

const notExpectedSlots = [
  { start: new Date('2024-03-29T09:00:00'), end: new Date('2024-03-29T10:00:00') }, // Karfreitag
  { start: new Date('2024-03-30T09:00:00'), end: new Date('2024-03-30T10:00:00') }, // Sa
  { start: new Date('2024-03-31T09:00:00'), end: new Date('2024-03-31T10:00:00') }, // So
  { start: new Date('2024-04-01T09:00:00'), end: new Date('2024-04-01T10:00:00') }, // Ostermontag
  { start: new Date('2024-04-06T09:00:00'), end: new Date('2024-04-06T10:00:00') }, // Sa
  { start: new Date('2024-04-07T09:00:00'), end: new Date('2024-04-07T10:00:00') }, // So
];

const slots = [...expectedSlots, ...notExpectedSlots];

describe('filterSlots', () => {
  it('should return slots of length 5', () => {
    const filteredSlots = filterSlots(slots, region);
    expect(filteredSlots.length).toBe(5);
  });

  it('should return slots without weekend days', () => {
    const filteredSlots = filterSlots(slots, region);

    expect(filteredSlots).toEqual(expectedSlots);
    // not contained in array
    expect(filteredSlots).not.toContain(notExpectedSlots);
  });

  it('should return without regional holidays', () => {
    const anyDay = [{ start: new Date('2024-08-16T09:00:00'), end: new Date('2024-08-16T10:00:00') }];
    const himmelfahrt = [{ start: new Date('2024-08-15T09:00:00'), end: new Date('2024-08-15T10:00:00') }];
    const slots = [...anyDay, ...himmelfahrt];
    const filteredSlots = filterSlots(slots, region);

    expect(filteredSlots).toEqual(anyDay);
  });
});
