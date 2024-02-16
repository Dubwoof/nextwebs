import { JSX } from 'react';
import { PageProps } from '../Page.types';
import { WelcomeSection } from './sections/WelcomeSection';
import { AboutSection } from './sections/AboutSection';

export function Home({}: PageProps): JSX.Element {
  return (
    <>
      <WelcomeSection />
      <AboutSection />
    </>
  );
}
