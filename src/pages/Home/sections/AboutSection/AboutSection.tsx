import { JSX } from 'react';
import { Section } from '../../../../components/Section/Section';
import { NavWidth } from '../../../../layouts/NavWidth';
import { Tab, Tabs } from '../../../../components/Tabs/Tabs';
import { Overview } from './components/Overview';
import { Typography } from '../../../../elements/Typography/Typography';
import { Projects } from './components/Projects';

export function AboutSection(): JSX.Element {
  return (
    <Section>
      <NavWidth>
        <div className="text-center min-h-[70vh]">
          <Tabs>
            <Tab label="Overview">
              <Overview />
            </Tab>
            <Tab label="UI Library">
              <Typography variant="overline">COMING SOON!</Typography>
            </Tab>
            <Tab label="Products">
              <Typography variant="overline">COMING SOON!</Typography>
            </Tab>
            <Tab label="Projects">
              <Projects />
            </Tab>
          </Tabs>
        </div>
      </NavWidth>
    </Section>
  );
}
