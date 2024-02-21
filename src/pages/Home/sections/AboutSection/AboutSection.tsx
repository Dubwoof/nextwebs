import { JSX } from 'react';
import { Section } from '../../../../components/Section/Section';
import { NavWidth } from '../../../../layouts/NavWidth';
import { Tab, Tabs } from '../../../../components/Tabs/Tabs';
import { Overview } from './components/Overview';
import { Typography } from '../../../../elements/Typography/Typography';

export function AboutSection(): JSX.Element {
  return (
    <Section>
      <NavWidth>
        <div className="text-center min-h-[70vh]">
          <Tabs>
            <Tab label="Overview">
              <Overview />
            </Tab>
            <Tab label="Elements">
              <div className="flex justify-center h-full items-center">
                <Typography variant="overline">COMING SOON!</Typography>
              </div>
            </Tab>
            <Tab label="Components">
              <div className="flex justify-center h-full items-center">
                <Typography variant="overline">COMING SOON!</Typography>
              </div>
            </Tab>
            <Tab label="Tools">
              <div className="flex justify-center h-full items-center">
                <Typography variant="overline">COMING SOON!</Typography>
              </div>
            </Tab>
          </Tabs>
        </div>
      </NavWidth>
    </Section>
  );
}
