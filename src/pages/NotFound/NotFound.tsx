import { JSX } from 'react';
import { PageProps } from '../Page.types';
import { Link } from 'react-router-dom';
import { Section } from '../../components/Section/Section';
import { NavWidth } from '../../layouts/NavWidth';

export function NotFound({}: PageProps): JSX.Element {
  return (
    <Section>
      <NavWidth>
        <div className="flex flex-col text-center h-[60vh] pt-16">
          <h1>Not Found</h1>
          <Link to="/">Go home</Link>
        </div>
      </NavWidth>
    </Section>
  );
}
