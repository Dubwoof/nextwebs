import { JSX } from 'react';
import { PageProps } from '../Page.types';
import { Typography } from '../../elements/Typography/Typography';

export function Home({}: PageProps): JSX.Element {
  return (
    <div>
      <Typography variant="overline" transform="uppercase">
        Welcome to Nextwebs
      </Typography>
      <Typography variant="h1" className="flex">
        Enthusiastic Software Engineering to Build a Connected&nbsp;
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">&#123;World&#125;</div>.
      </Typography>
    </div>
  );
}
