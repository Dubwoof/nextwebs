import { JSX } from 'react';
import { PageProps } from '../Page.types';
import { Link } from 'react-router-dom';

export function NotFound({}: PageProps): JSX.Element {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}
