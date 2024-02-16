import { JSX } from 'react';
import { Section } from '../../../components/Section/Section';
import { NavWidth } from '../../../layouts/NavWidth';
import { Tabs } from '../../../components/Tabs/Tabs';

export function AboutSection(): JSX.Element {
  return (
    <Section>
      <NavWidth>
        <div className="text-center min-h-[70vh]">
          <Tabs></Tabs>
        </div>
      </NavWidth>
    </Section>
  );
}
