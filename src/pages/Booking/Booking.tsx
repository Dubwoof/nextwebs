import { PageProps } from '../Page.types';
import { Typography } from '../../elements/Typography/Typography';
import munich from '../../assets/munich.avif';

export function Booking({}: PageProps): JSX.Element {
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

        <div className="w-full bg-white rounded-3xl backdrop-blur bg-opacity-60 p-4">
          <Typography variant="h2" className="font-robotoRegular text-3xl text-robotoBold mb-4">
            Select Date & Time
          </Typography>
          <div className="flex gap-4 mb-4">
            <div className="flex bg-warning cursor-pointer w-16 aspect-square rounded-lg justify-center items-center p-2">
              Mon
              <br />
              01
            </div>
            <div className="flex bg-white cursor-pointer w-16 aspect-square rounded-lg justify-center items-center p-2 text-background">
              Tue
              <br />
              02
            </div>
            <div className="flex bg-white cursor-pointer w-16 aspect-square rounded-lg justify-center items-center p-2 text-background">
              Wed
              <br />
              03
            </div>
            <div className="flex bg-white cursor-pointer w-16 aspect-square rounded-lg justify-center items-center p-2 text-background">
              Thu
              <br />
              04
            </div>
            <div className="flex bg-white cursor-pointer w-16 aspect-square rounded-lg justify-center items-center p-2 text-background">
              Fri
              <br />
              05
            </div>
          </div>
          <div className="flex justify-center items-center bg-warning h-16 rounded-xl mb-1">Book free</div>
          <Typography variant="caption" className="font-robotoRegular text-xl mb-4 text-center">
            (tip based)
          </Typography>
        </div>
      </div>
    </div>
  );
}
