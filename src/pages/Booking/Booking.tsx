import { PageProps } from '../Page.types';
import munich from '../../assets/munich.avif';
import { useState } from 'react';
import { add, format, isToday, isTomorrow } from 'date-fns';
import { Slot } from '../../utils/Slot';
import { de } from 'date-fns/locale';
import { AnimatedContainer } from '../../components/AnimatedContainer/AnimatedContainer';
import { MdAdd, MdRemove } from 'react-icons/md';
import { Colors } from '../../constants/Colors.enum';

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
  const [email, setEmail] = useState<string>();
  const [personsFieldVisible, setPersonsFieldVisible] = useState(false);

  function handlePersonsChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPersons(parseInt(event.target.value));
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleDaySelect(dayIndex: number) {
    setSelectedDay(dayIndex);
    // You may perform any additional actions upon day selection here
  }

  function handleSlotSelect(slot: Slot) {
    console.log(slot);
    setSelectedSlot(slot);
  }

  function togglePersonFieldVisibility() {
    if (email === undefined || email === '') {
      return;
    }
    setPersonsFieldVisible(!personsFieldVisible);
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
          <label className="text-background">Tour auswählen</label>
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
          <AnimatedContainer isExpanded={selectedDay !== undefined} className="mb-4">
            <div className="flex gap-4">
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
          </AnimatedContainer>

          <AnimatedContainer isExpanded={selectedSlot !== undefined} className="mb-4">
            <label htmlFor="email" className="text-background">
              Email
            </label>
            <input
              className="h-16 bg-white w-full rounded-lg text-background text-lg p-4"
              name="email"
              value={email}
              type="email"
              onChange={handleEmailChange}
              onBlur={togglePersonFieldVisibility}
            />
          </AnimatedContainer>

          <AnimatedContainer isExpanded={personsFieldVisible} className="mb-4">
            <div className="flex flex-col">
              <label htmlFor="persons" className="text-background">
                Personen
              </label>
              <div className="flex">
                <input
                  className="h-16 bg-white w-16 rounded-lg text-background text-center text-lg"
                  name="persons"
                  value={persons}
                  type="number"
                  onChange={handlePersonsChange}
                />
                <div className="flex flex-col justify-center items-center h-16 w-16 ml-2" onClick={() => setPersons(persons - 1)}>
                  <MdAdd size={40} color={Colors.Background} />
                </div>
                <div className="flex flex-col justify-center items-center h-16 w-16 ml-2" onClick={() => setPersons(persons + 1)}>
                  <MdRemove size={40} color={Colors.Background} />
                </div>
              </div>
            </div>
          </AnimatedContainer>

          <div className="flex justify-center items-center bg-warning h-16 rounded-xl mb-1">Kostenlos buchen</div>
          <p className="text-sm text-center text-background">(Trinkgeld basiert)</p>
        </div>
      </div>
    </div>
  );
}
