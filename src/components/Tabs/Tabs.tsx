import { useState, ReactNode, JSX, isValidElement, Children, useEffect, useRef } from 'react';
import { TabsProps, TabProps } from './Tabs.types';
import Button from '../../elements/Button/Button';

function Tabs({ children }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);
  const contents: ReactNode[] = [];
  const titles: string[] = [];
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

  Children.forEach(children, tab => {
    if (isValidElement(tab)) {
      const childProps = tab.props as TabProps;
      titles.push(childProps.label);
      contents.push(childProps.children);
    }
  });

  return (
    <div ref={tabsRef} className="flex flex-col md:flex-row gap-8">
      <div className="flex md:flex-col gap-4 overflow-x-scroll no-scrollbar px-4 md:min-w-fit" data-id="tabTitlesCol">
        {titles.map((title, index) => (
          <Button className="whitespace-nowrap" key={index} isPrimary={index === activeTab} onClick={() => setActiveTab(index)}>
            {title}
          </Button>
        ))}
      </div>
      <div>{contents[activeTab]}</div>
    </div>
  );
}

function Tab({ children }: TabProps): JSX.Element {
  return <div>{children}</div>;
}

export { Tabs, Tab };
