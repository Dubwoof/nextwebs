import { PageProps } from '../Page.types';
import { Typography } from '../../elements/Typography/Typography';

export function Booking({}: PageProps): JSX.Element {
  return (
    <div className="pb-16 lg:pt-32">
      <div className="bg-munich bg-center h-screen max-h-screen max-w-screen bg-cover w-screen flex flex-col justify-between px-4 pt-8">
        <Typography variant="h1" className="font-robotoRegular text-4xl leading-8">
          Munich
          <br />
          City
          <br />
          Tour
        </Typography>

        <div className="w-full h-60 bg-white rounded-3xl"></div>
      </div>
    </div>
  );
}
