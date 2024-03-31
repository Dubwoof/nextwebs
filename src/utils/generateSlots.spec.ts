import { generateSlots } from './generateSlots';
import { describe, it, expect, beforeAll, vi, afterEach } from 'vitest';
import { addDays, isAfter, setHours } from 'date-fns';

const slotLengthMinutes = 60;
const startHour = 9;
const endHour = 12;
const intervalMin = 60;

describe('generateSlots', () => {
  let originalDateNow: () => number;

  beforeAll(() => {
    originalDateNow = Date.now.bind(global.Date);
  });

  afterEach(() => {
    Date.now = originalDateNow;
  });

  it('should return an array of which first element should start tomorrow at startHour if the current time is earlier than 12 pm', () => {
    // Mock current date
    Date.now = vi.fn(() => new Date('2024-03-15T11:00:00').getTime());
    const days = 1;
    const slots = generateSlots({ startHour, endHour, days, slotLengthMinutes, intervalMin });
    const expectedFirstSlot = setHours(addDays(new Date(), 1), startHour);

    expect(isAfter(slots[0].start, expectedFirstSlot)).toBe(true);
  });

  it('should return an array of which first element should start the day after tomorrow at startHour if the current time is 12 PM and later', () => {
    // Mock current date
    Date.now = vi.fn(() => new Date('2024-03-15T12:00:00').getTime());
    const days = 1;

    const slots = generateSlots({ startHour, endHour, days, slotLengthMinutes, intervalMin });
    const expectedFirstSlot = setHours(addDays(Date.now(), 2), startHour);

    expect(slots[0].start).toEqual(expectedFirstSlot);
  });

  it('should return 3 slots if startHour is 9, endHour is 12 and day is 1', () => {
    const days = 1;

    const slotLengthHours = endHour - startHour;
    const slots = generateSlots({ startHour, endHour, days, slotLengthMinutes, intervalMin });

    expect(slots.length).toBe(slotLengthHours);
  });

  it('should return 6 slots if startHour is 9, endHour is 12 and days are 2', () => {
    const days = 2;

    const slotLengthHours = (endHour - startHour) * days;
    const slots = generateSlots({ startHour, endHour, days, slotLengthMinutes, intervalMin });

    expect(slots.length).toBe(slotLengthHours);
  });

  it('should return 5 slots starting from 9:00 AM with 30-minute interval', () => {
    // Mock current date
    Date.now = vi.fn(() => new Date('2024-03-15T11:00:00').getTime());
    const slots = generateSlots({ startHour: 9, endHour: 12, days: 1, slotLengthMinutes: 60, intervalMin: 30 });
  
    expect(slots.length).toBe(5);
  });

  it('should return 5 slots starting from 9:00 AM with 30min interval and slotLength of 30 min', () => {
    // Mock current date
    Date.now = vi.fn(() => new Date('2024-03-15T11:00:00').getTime());
    const days = 1;
    const intervalMin = 30;
    const slotLengthMinutes = 30;
    const slots = generateSlots({ startHour, endHour, days, slotLengthMinutes, intervalMin });

    expect(slots.length).toBe(6);
  });
});
