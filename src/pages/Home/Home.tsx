import { JSX } from 'react';
import { PageProps } from '../Page.types';

export function Home({}: PageProps): JSX.Element {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
