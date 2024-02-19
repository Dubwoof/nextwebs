import { JSX } from 'react';
import { Section } from '../../../../components/Section/Section';
import { NavWidth } from '../../../../layouts/NavWidth';
import { Tab, TabContent, TabTitle, Tabs } from '../../../../components/Tabs/Tabs';
import { Overview } from './components/Overview';
import { Typography } from '../../../../elements/Typography/Typography';

export function AboutSection(): JSX.Element {
  return (
    <Section>
      <NavWidth>
        <div className="text-center min-h-[70vh]">
          <Tabs>
            <Tab>
              <TabTitle>Overview</TabTitle>
              <TabContent>
                <Overview />
              </TabContent>
            </Tab>
            <Tab>
              <TabTitle>Elements</TabTitle>
              <TabContent>
                <div className="flex justify-center h-full items-center">
                  <Typography variant="overline">COMING SOON!</Typography>
                </div>
              </TabContent>
            </Tab>
            <Tab>
              <TabTitle>Components</TabTitle>
              <TabContent>
                <div className="flex justify-center h-full items-center">
                  <Typography variant="overline">COMING SOON!</Typography>
                </div>
              </TabContent>
            </Tab>
            <Tab>
              <TabTitle>Tools</TabTitle>
              <TabContent>
                <div className="flex justify-center h-full items-center">
                  <Typography variant="overline">COMING SOON!</Typography>
                </div>
              </TabContent>
            </Tab>
          </Tabs>
        </div>
      </NavWidth>
    </Section>
  );
}
