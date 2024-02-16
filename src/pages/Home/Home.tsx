import { JSX } from 'react';
import { PageProps } from '../Page.types';
import { Typography } from '../../elements/Typography/Typography';
import { NavWidth } from '../../layouts/NavWidth';

export function Home({}: PageProps): JSX.Element {
  return (
    <NavWidth>
      <div className="px-4 text-center">
        <Typography variant="overline" transform="uppercase" className="center">
          welcome to nextwebs
        </Typography>
        <Typography variant="h1">
          Enthusiastic Software Engineering to Build a Connected&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500">&#123;World&#125;</span>.
        </Typography>
      </div>
    </NavWidth>
  );
}
