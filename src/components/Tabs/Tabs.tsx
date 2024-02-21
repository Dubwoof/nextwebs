import { useState, ReactNode, JSX, isValidElement, Children } from 'react';
import { TabContentProps, TabProps, TabTitleProps, TabsProps } from './Tabs.types';
import Button from '../../elements/Button/Button';

function Tabs({ children }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);
  const contents: ReactNode[] = [];
  const titles: ReactNode[] = [];

  Children.forEach(children, (child, tabIndex) => {
    if (isValidElement(child)) {
      Children.forEach(child.props.children, (tabChild, index) => {
        if (isValidElement(tabChild)) {
          const typeName = typeof tabChild.type === 'function' ? tabChild.type.name : '';
          if (typeName === 'TabTitle') {
            titles.push(
              <Button
                isPrimary={tabIndex === activeTab}
                key={`title_${tabIndex}_${index}`}
                onClick={() => setActiveTab(tabIndex)}
                className="cursor-pointer text-start"
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

function Tab({ children }: TabProps): JSX.Element {
  return <div>{children}</div>;
}

function TabTitle({ children }: TabTitleProps): JSX.Element {
  return <div>{children}</div>;
}

function TabContent({ children }: TabContentProps): JSX.Element {
  return <div>{children}</div>;
}

export { Tabs, Tab, TabTitle, TabContent };
