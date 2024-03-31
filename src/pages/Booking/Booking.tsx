import { PageProps } from '../Page.types';
import { Typography } from '../../elements/Typography/Typography';
import munich from '../../assets/munich.avif';
import { useState } from 'react';
import { add, format, isToday, isTomorrow } from 'date-fns';
import { Slot } from '../../utils/Slot';
import { de } from 'date-fns/locale';

export function Booking({}: PageProps): JSX.Element {
  const today = new Date();
  today.setHours(14, 0, 0, 0);

  const slots: Slot[] = [
    { start: add(today, { days: 0, hours: 0 }) },
    { start: add(today, { days: 0, hours: 2 }) },
    { start: add(today, { days: 1, hours: 0 }) },
    { start: add(today, { days: 1, hours: 2 }) },
    { start: add(today, { days: 2, hours: 0 }) },
    { start: add(today, { days: 2, hours: 2 }) },
    { start: add(today, { days: 3, hours: 0 }) },
    { start: add(today, { days: 3, hours: 2 }) },
  ];

  const [selectedDay, setSelectedDay] = useState<number | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<Slot | undefined>();
  const [persons, setPersons] = useState(1);

  function handlePersonsChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPersons(parseInt(event.target.value));
  }

  function handleDaySelect(dayIndex: number) {
    setSelectedDay(dayIndex);
    // You may perform any additional actions upon day selection here
  }

  function handleSlotSelect(slot: Slot) {
    console.log(slot);
    setSelectedSlot(slot);
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
        className="bg-munich bg-center h-svh bg-cover w-screen flex flex-col justify-between px-4 pt-8 pb-4"
      >
        <h1 className="text-3xl font-comfortaaBold leading-8">
          Munich
          <br />
          City
          <br />
          Tour
        </h1>

        <div className="w-full bg-white rounded-3xl backdrop-blur bg-opacity-60 px-4 pt-4 pb-2">
          <Typography variant="h2" className="text-3xl text-robotoBold mb-4 text-background">
            Bitte auswählen
          </Typography>
          <div className="flex justify-between mb-4">
            {sortedDays.map((day, index) => {
              return (
                <div
                  key={index}
                  className={`flex ${selectedDay === index ? 'bg-warning text-white' : 'bg-white text-background'} cursor-pointer h-16 min-w-16 rounded-lg justify-center items-center p-2`}
                  onClick={() => handleDaySelect(index)}
                >
                  {isToday(new Date(day)) ? (
                    'Heute'
                  ) : isTomorrow(new Date(day)) ? (
                    'Morgen'
                  ) : (
                    <div className="text-center">
                      {format(new Date(day), 'EE', { locale: de })}
                      <br />
                      {format(new Date(day), 'd.', { locale: de })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Render slots for the selected day */}
          <div
            className={`${selectedDay !== undefined ? 'h-16 opacity-100 mb-4' : 'h-0 opacity-0 mb-0'} flex gap-4 transition-height duration-300`}
          >
            {slotsByDay.get(sortedDays[selectedDay!])?.map((slot, index) => (
              <div
                key={index}
                className={`flex ${selectedSlot && selectedSlot.start === slot.start ? 'bg-warning' : 'bg-white'} cursor-pointer h-16 aspect-square rounded-lg justify-center items-center p-2 text-background`}
                onClick={() => handleSlotSelect(slot)}
              >
                {format(slot.start, 'HH:mm')}
              </div>
            ))}
          </div>

          <div
            className={`${selectedSlot !== undefined ? 'h-fit opacity-100' : 'h-0 opacity-0'} flex flex-col transition-height duration-300`}
          >
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
          </div>

          <div className="flex justify-center items-center bg-warning h-16 rounded-xl mb-1">Kostenlos buchen</div>
          <p className="text-sm text-center text-background">(Trinkgeld basiert)</p>
        </div>
      </div>
    </div>
  );
}
