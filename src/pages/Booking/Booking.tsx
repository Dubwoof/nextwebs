import { PageProps } from '../Page.types';
import { Typography } from '../../elements/Typography/Typography';
import munich from '../../assets/munich.avif';

export function Booking({}: PageProps): JSX.Element {
  return (
    <div className="pb-16 lg:pt-32">
      <div
        style={{ backgroundImage: `url(${munich})` }} // Inline style with background image
        className="bg-munich bg-center h-svh bg-cover w-screen flex flex-col justify-between px-4 pt-8"
      >
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
