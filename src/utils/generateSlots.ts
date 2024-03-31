import { addDays, setHours, addMinutes } from 'date-fns';

export interface Slot {
  start: Date;
  end: Date;
}

interface GetSlotsProps {
  startHour: number;
  endHour: number;
  days: number;
  slotLengthMinutes: number;
  intervalMin: number;
}

export function generateSlots({ startHour, endHour, days, slotLengthMinutes, intervalMin }: GetSlotsProps): Slot[] {
  const slots: Slot[] = [];

  // Set the start date based on the current time
  let startDate = new Date();
  startDate.setHours(0, 0, 0, 0); // Reset hours, minutes, seconds, and milliseconds

  if (startDate.getHours() >= 12) {
    // If the current time is 12 PM or later, start from the day after tomorrow
    startDate = addDays(startDate, 2);
  } else {
    // If the current time is earlier than 12 PM, start from tomorrow
    startDate = addDays(startDate, 1);
  }

  // Set the start hour
  startDate = setHours(startDate, startHour);

  // Generate slots for each day
  for (let day = 0; day < days; day++) {
    // Calculate the date for the current day
    const currentDay = addDays(startDate, day);

    // Set start time for the first slot of the current day
    let startTime = setHours(currentDay, startHour);

    // Generate slots for the current day
    for (let slotIndex = 0; startTime.getHours() < endHour || (startTime.getHours() === endHour && startTime.getMinutes() < slotLengthMinutes); slotIndex++) {
      const slotStart = startTime;
      let slotEnd = addMinutes(slotStart, slotLengthMinutes);

      // Check if slotEnd exceeds endHour
      if (slotEnd.getHours() > endHour || (slotEnd.getHours() === endHour && slotEnd.getMinutes() !== 0)) {
        // Adjust slotEnd to be at endHour
        slotEnd = setHours(slotStart, endHour);
      }

      slots.push({ start: slotStart, end: slotEnd });

      // Move to the next slot using the interval
      startTime = addMinutes(startTime, intervalMin);
    }
  }

  return slots;
}
