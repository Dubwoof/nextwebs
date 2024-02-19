import React, { useState, ReactNode } from 'react';
import { TabContentProps, TabProps, TabTitleProps, TabsProps } from './Tabs.types';
import Button from '../../elements/Button/Button';

function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const contents: ReactNode[] = [];
  const titles: ReactNode[] = [];

  React.Children.forEach(children, (child, tabIndex) => {
    if (React.isValidElement(child)) {
      React.Children.forEach(child.props.children, (tabChild, index) => {
        if (React.isValidElement(tabChild)) {
          const typeName = typeof tabChild.type === 'function' ? tabChild.type.name : '';
          if (typeName === 'TabTitle') {
            titles.push(
              <Button
                isPrimary={tabIndex === activeTab}
                key={`title_${tabIndex}_${index}`}
                onClick={() => setActiveTab(tabIndex)}
                className="cursor-pointer"
              >
                {tabChild}
              </Button>,
            );
          } else if (typeName === 'TabContent') {
            contents.push(tabChild);
          }
        }
      });
    }
  });

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-4 cursor-pointer">{titles}</div>
      <div>{contents[activeTab]}</div>
    </div>
  );
}

function Tab({ children }: TabProps) {
  return <div className="tab">{children}</div>;
}

function TabTitle({ children }: TabTitleProps) {
  return <>{children}</>;
}

function TabContent({ children }: TabContentProps) {
  return <div>{children}</div>;
}

export { Tabs, Tab, TabTitle, TabContent };
