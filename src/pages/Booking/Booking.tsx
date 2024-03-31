import { PageProps } from '../Page.types';
import { Typography } from '../../elements/Typography/Typography';
import munich from '../../assets/munich.avif';
import { useState } from 'react';
import { add, format, isToday, isTomorrow } from 'date-fns';
import { Slot } from '../../utils/Slot';

export function Booking({}: PageProps): JSX.Element {
  const today = new Date(2024, 2, 31, 14, 0);

  const slots = [
    { start: add(today, { days: 0, hours: 0 }), end: add(today, { days: 0, hours: 2 }) },
    { start: add(today, { days: 0, hours: 2 }), end: add(today, { days: 0, hours: 4 }) },
    { start: add(today, { days: 1, hours: 0 }), end: add(today, { days: 1, hours: 2 }) },
    { start: add(today, { days: 1, hours: 2 }), end: add(today, { days: 1, hours: 4 }) },
    { start: add(today, { days: 2, hours: 0 }), end: add(today, { days: 2, hours: 2 }) },
    { start: add(today, { days: 2, hours: 2 }), end: add(today, { days: 2, hours: 4 }) },
    { start: add(today, { days: 3, hours: 0 }), end: add(today, { days: 3, hours: 2 }) },
    { start: add(today, { days: 3, hours: 2 }), end: add(today, { days: 3, hours: 4 }) },
  ];

  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<Slot>();
  const [persons, setPersons] = useState(1);

  function handlePersonsChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPersons(parseInt(event.target.value));
  }

  function handleDaySelect(dayIndex: number) {
    setSelectedDay(dayIndex);
    // You may perform any additional actions upon day selection here
  }

  function handleSlotSelect(slot: Slot) {
    setSelectedSlot(slot);
    // You may perform any additional actions upon slot selection here
  }

  // Group slots by day
  const slotsByDay = slots.reduce((acc, slot) => {
    const dateKey = format(slot.start, 'yyyy-MM-dd');
    if (!acc.has(dateKey)) {
      acc.set(dateKey, []);
    }
    acc.get(dateKey)?.push(slot);
    return acc;
  }, new Map<string, Slot[]>());

  // Sort days in ascending order
  const sortedDays = Array.from(slotsByDay.keys()).sort();

  return (
    <div className="pb-16 lg:pt-32">
      <div
        style={{ backgroundImage: `url(${munich})` }}
        className="bg-munich bg-center h-svh bg-cover w-screen flex flex-col justify-between px-4 py-8"
      >
        <Typography variant="h1" className="text-3xl leading-8">
          Munich
          <br />
          City
          <br />
          Tour
        </Typography>

        <div className="w-full bg-white rounded-3xl backdrop-blur bg-opacity-60 p-4">
          <Typography variant="h2" className="text-3xl text-robotoBold mb-4 text-background">
            Bitte auswählen
          </Typography>
          <div className="flex gap-4 mb-4">
            {sortedDays.map((day, index) => {
              return (
                <div
                  key={index}
                  className={`flex ${selectedDay === index ? 'bg-warning text-white' : 'bg-white text-background'} cursor-pointer h-16 min-w-16 rounded-lg justify-center items-center p-2`}
                  onClick={() => handleDaySelect(index)}
                >
                  {isToday(new Date(day)) ? 'Heute' : isTomorrow(new Date(day)) ? 'Morgen' : format(new Date(day), 'EEE')}
                </div>
              );
            })}
          </div>

          {/* Render slots for the selected day */}
          <div className="flex gap-4">
            {slotsByDay.get(sortedDays[selectedDay])?.map((slot, index) => (
              <div
                key={index}
                className={`flex ${selectedSlot === slot ? 'bg-warning' : 'bg-white'} cursor-pointer h-16 aspect-square rounded-lg justify-center items-center p-2 text-background`}
                onClick={() => handleSlotSelect(slot)}
              >
                {format(slot.start, 'HH:mm')}
              </div>
            ))}
          </div>

          <Typography variant="h2" className="text-xl mb-1 text-background">
            Personen
          </Typography>
          <input
            className="h-16 bg-white w-16 rounded-lg mb-4 text-background text-center text-xl"
            name="persons"
            value={persons}
            type="number"
            onChange={handlePersonsChange}
          />

          <div className="flex justify-center items-center bg-warning h-16 rounded-xl mb-1">Kostenlos buchen</div>
          <Typography variant="caption" className="font-robotoRegular text-xl mb-4 text-center text-background">
            (Trinkgeld basiert)
          </Typography>
        </div>
      </div>
    </div>
  );
}
