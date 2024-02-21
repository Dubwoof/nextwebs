import { JSX } from 'react';
import { Section } from '../../../../components/Section/Section';
import { NavWidth } from '../../../../layouts/NavWidth';
import { Tab, TabChild, Tabs } from '../../../../components/Tabs/Tabs';
import { Overview } from './components/Overview';
import { Typography } from '../../../../elements/Typography/Typography';

export function AboutSection(): JSX.Element {
  return (
    <Section>
      <NavWidth>
        <div className="text-center min-h-[70vh]">
          <Tabs>
            <Tab>
              <TabChild childType="title">Overview</TabChild>
              <TabChild childType="content">
                <Overview />
              </TabChild>
            </Tab>
            <Tab>
              <TabChild childType="title">Elements</TabChild>
              <TabChild childType="content">
                <div className="flex justify-center h-full items-center">
                  <Typography variant="overline">COMING SOON!</Typography>
                </div>
              </TabChild>
            </Tab>
            <Tab>
              <TabChild childType="title">Components</TabChild>
              <TabChild childType="content">
                <div className="flex justify-center h-full items-center">
                  <Typography variant="overline">COMING SOON!</Typography>
                </div>
              </TabChild>
            </Tab>
            <Tab>
              <TabChild childType="title">Tools</TabChild>
              <TabChild childType="content">
                <div className="flex justify-center h-full items-center">
                  <Typography variant="overline">COMING SOON!</Typography>
                </div>
              </TabChild>
            </Tab>
          </Tabs>
        </div>
      </NavWidth>
    </Section>
  );
}
