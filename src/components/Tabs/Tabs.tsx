import { useState, ReactNode, JSX, isValidElement, Children, useEffect, useRef } from 'react';
import { TabsProps, TabProps, TabChildProps } from './Tabs.types';
import Button from '../../elements/Button/Button';

function Tabs({ children }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);
  const contents: ReactNode[] = [];
  const titles: ReactNode[] = [];
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for the custom event
    const handleTabChange = (event: CustomEvent<number>) => {
      setActiveTab(event.detail);
      if (tabsRef.current) {
        tabsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('changeTab', handleTabChange as EventListener);

    return () => {
      window.removeEventListener('changeTab', handleTabChange as EventListener);
    };
  }, []);

  Children.forEach(children, (child, tabIndex) => {
    if (isValidElement(child)) {
      Children.forEach(child.props.children, (tabChild, index) => {
        if (isValidElement(tabChild)) {
          const childProps = tabChild.props as TabChildProps;
          if (childProps.childType === 'title') {
            titles.push(
              <Button
                key={`title_${tabIndex}_${index}`}
                onClick={() => setActiveTab(tabIndex)}
                isPrimary={activeTab === tabIndex}
                className="cursor-pointer text-start"
              >
                {tabChild}
              </Button>,
            );
          } else if (childProps.childType === 'content') {
            contents.push(tabChild);
          }
        }
      });
    }
  });

  return (
    <div ref={tabsRef} className="flex gap-8">
      <div className="flex flex-col gap-4 cursor-pointer" data-id="tabTitlesCol">
        {titles}
      </div>
      <div data-id="tabContent">{contents[activeTab]}</div>
    </div>
  );
}

function Tab({ children }: TabProps): JSX.Element {
  return <div data-id="tab">{children}</div>;
}

function TabChild({ children }: TabChildProps): JSX.Element {
  return <div>{children}</div>;
}

export { Tabs, Tab, TabChild };
