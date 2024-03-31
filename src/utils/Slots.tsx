import { useState } from 'react';
import { Locale, format } from 'date-fns';
import deLocale from 'date-fns/locale/de';
import { generateSlots } from './generateSlots';
import { filterSlots } from './filterSlots';
import { Region } from 'feiertagejs';
import { Slot } from './Slot';

interface SlotProps {
  region: string;
}

const startHour = 9;
const endHour = 18;
const slotLengthMinutes = 60;
const days = 14;

export function Slots({ region }: SlotProps): JSX.Element {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

  // Generate slots
  //@ts-ignore
  const generatedSlots = generateSlots({ startHour, endHour, days, slotLengthMinutes });

  // Filter slots by region
  const filteredSlots = filterSlots(generatedSlots, region as Region);

  // Group filtered slots by day
  const slotsByDay = filteredSlots.reduce((acc, slot) => {
    const dateKey = format(slot.start, 'yyyy-MM-dd');
    if (!acc.has(dateKey)) {
      acc.set(dateKey, []);
    }
    acc.get(dateKey)?.push(slot);
    return acc;
  }, new Map<string, typeof filteredSlots>());

  // Sort days in ascending order
  const sortedDays = Array.from(slotsByDay.keys()).sort();

  const handleSlotClick = (slot: Slot) => {
    setSelectedSlot(slot);
  }

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  }

  return (
    <div>
      <h1>Filtered slots</h1>
      <div className="flex gap-4">
        {sortedDays.map(day => {
          const parsedDate = new Date(day);
          const dayName = format(parsedDate, 'EEE', { locale: deLocale as unknown as Locale });
          const dayOfMonth = format(parsedDate, 'dd');

          return (
            <div
              key={day}
              className={`flex bg-gray-200 cursor-pointer w-16 aspect-square rounded-md justify-center items-center p-2 ${selectedDay && format(selectedDay, 'yyyy-MM-dd') === format(parsedDate, 'yyyy-MM-dd') ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => handleDayClick(parsedDate)}
            >
              {dayName}
              <br />
              {dayOfMonth}
            </div>
          );
        })}
      </div>
      {selectedDay && (
        <div className="flex gap-4 mt-4">
          {slotsByDay.get(format(selectedDay, 'yyyy-MM-dd'))?.map((slot, index) => (
            <div
              key={index}
              className={`bg-gray-200 w-32 aspect-square rounded-md justify-center items-center p-2 cursor-pointer ${selectedSlot === slot ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => handleSlotClick(slot)}
            >
              {format(slot.start, 'HH:mm')}
            </div>
          ))}
        </div>
      )}

      {selectedSlot && (
        <div>
          Selected Slot: {format(selectedSlot.start, 'EE')} {format(selectedSlot.start, 'HH:mm')} - {format(selectedSlot.end, 'HH:mm')}
        </div>
      )}
    </div>
  );
}
