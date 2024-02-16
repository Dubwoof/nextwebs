import Button from '../../elements/Button/Button';
import { Typography } from '../../elements/Typography/Typography';

interface TabsProps {
  direction?: 'row' | 'col';
}

/*
<Tabs>
    <Tab>
        <TabTitle>Overview</TabTitle>
        <TabContent>
    </Tab>
    <Tab>
        <TabTitle>Elements</TabTitle>
        <TabContent>
    </Tab>
    <Tab>
        <TabTitle>Components</TabTitle>
        <TabContent>
    </Tab>
    <Tab>
        <TabTitle>Tools</TabTitle>
        <TabContent>
    </Tab>
</Tabs>
*/

export function Tabs({ direction = 'col' }: TabsProps): JSX.Element {
  if (direction === 'col') {
    return (
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <Button className="text-start" isPrimary>
            Overview
          </Button>
          <Button className="text-start">Elements</Button>
          <Button className="text-start">Components</Button>
          <Button className="text-start">Tools</Button>
          <Button className="text-start">Projects</Button>
        </div>
        <div>
          <div className="text-start">
            <Typography variant="h2" transform="uppercase">
              About Me
            </Typography>
            <Typography variant="h3" className="mb-8">
              Hi, I'm Artur, a Software Engineer.
            </Typography>
            <Typography className="mb-8">
              I'm a software engineer with a passion for web development. With more +4 years of experience in the field, I have worked on a
              variety of projects, from small business websites to large-scale web applications. I'm always looking for new challenges and
              opportunities to grow and improve my skills.
            </Typography>
            <div className="flex gap-8 justify-center">
              <Button isPrimary>Contact</Button>
              <Button>About Me</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex col">
      <div className="flex">
        <button>Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
      </div>
      <div>
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </div>
    </div>
  );
}
