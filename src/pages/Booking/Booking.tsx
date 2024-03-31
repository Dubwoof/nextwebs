import { PageProps } from '../Page.types';
import { Typography } from '../../elements/Typography/Typography';
import munich from '../../assets/munich.avif';
import { useState } from 'react';

export function Booking({}: PageProps): JSX.Element {
  const [persons, setPersons] = useState(1);

  function handlePersonsChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPersons(parseInt(event.target.value));
  }

  return (
    <div className="pb-16 lg:pt-32">
      <div
        style={{ backgroundImage: `url(${munich})` }}
        className="bg-munich bg-center h-svh bg-cover w-screen flex flex-col justify-between px-4 py-8"
      >
        <Typography variant="h1" className="font-robotoRegular text-4xl leading-8">
          Munich
          <br />
          City
          <br />
          Tour
        </Typography>

        <div className="w-full bg-white rounded-3xl backdrop-blur bg-opacity-30 p-4">
          <Typography variant="h2" className="font-robotoRegular text-3xl text-robotoBold mb-4 text-background">
            Select Date & Time
          </Typography>
          <div className="flex justify-between mb-4">
            <div className="flex bg-warning cursor-pointer h-16 rounded-lg justify-center items-center p-2">Heute</div>
            <div className="flex bg-white cursor-pointer h-16 rounded-lg justify-center items-center p-2 text-background">Morgen</div>
            <div className="flex bg-white cursor-pointer h-16 aspect-square rounded-lg justify-center items-center p-2 text-background">
              Di
              <br />
              03
            </div>
            <div className="flex bg-white cursor-pointer h-16 aspect-square rounded-lg justify-center items-center p-2 text-background">
              Mi
              <br />
              04
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex bg-white cursor-pointer h-16 aspect-square rounded-lg justify-center items-center p-2 text-background">
              14:00
            </div>
            <div className="flex bg-warning cursor-pointer h-16 aspect-square rounded-lg justify-center items-center p-2">17:00</div>
          </div>

          <Typography variant="body1" className="text-bold text-xl mb-1">
            Persons
          </Typography>
          <input
            className="h-16 bg-white w-16 rounded-lg mb-4 text-background text-center text-xl"
            name="persons"
            value={persons}
            type="number"
            onChange={handlePersonsChange}
          />

          <div className="flex justify-center items-center bg-warning h-16 rounded-xl mb-1">Book free</div>
          <Typography variant="caption" className="font-robotoRegular text-xl mb-4 text-center">
            (tip based)
          </Typography>
        </div>
      </div>
    </div>
  );
}
