import { JSX } from 'react';
import { Section } from '../../../../components/Section/Section';
import { NavWidth } from '../../../../layouts/NavWidth';
import { Tab, TabContent, TabTitle, Tabs } from '../../../../components/Tabs/Tabs';
import { Overview } from './components/Overview';

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
              <TabContent>This is the Elements content.</TabContent>
            </Tab>
            <Tab>
              <TabTitle>Components</TabTitle>
              <TabContent>This is the Components content.</TabContent>
            </Tab>
            <Tab>
              <TabTitle>Tools</TabTitle>
              <TabContent>This is the Tools content.</TabContent>
            </Tab>
          </Tabs>
        </div>
      </NavWidth>
    </Section>
  );
}
