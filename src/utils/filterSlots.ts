import { isSaturday, isSunday } from 'date-fns';
import { Slot } from './Slot';
import { Region, isHoliday as isHolidayFn } from 'feiertagejs';

export function filterSlots(slots: Slot[], region: Region): Slot[] {
  console.log(slots, region);
  return slots.filter(slot => {
    const isWeekend = isSaturday(slot.start) || isSunday(slot.start);
    const isHoliday = isHolidayFn(slot.start, region);
    
    return !isWeekend && !isHoliday;
  });
}
