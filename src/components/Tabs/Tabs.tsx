import Button from '../../elements/Button/Button';
import { ReactLogo } from '../../elements/ReactLogo/ReactLogo';
import { Typography } from '../../elements/Typography/Typography';
import { calculateYearsFromDate } from '../../utils/calculateYearsFromDate';
import reactLogo from '../../assets/stack/react.png';
import cypressLogo from '../../assets/stack/cypress.png';
import nextjsLogo from '../../assets/stack/nextjs.png';
import javascriptLogo from '../../assets/stack/javascript.jpeg';
import html5Logo from '../../assets/stack/html5.png';
import css3Logo from '../../assets/stack/css3.png';
import typescriptLogo from '../../assets/stack/typescript.jpeg';
import viteLogo from '../../assets/stack/vite.png';
import postmanLogo from '../../assets/stack/postman.png';

interface TabsProps {
  direction?: 'row' | 'col';
}

const styles = {
  stackItem: 'flex flex-col items-center justify-center p-2 gap-1 bg-slate-600 rounded-xl aspect-square hover:bg-slate-700',
};

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
              I'm a software engineer with a passion for web development. With 4+ years of experience in the field, I have worked on a
              variety of projects, from small business websites to large-scale web applications. I'm always looking for new challenges and
              opportunities to grow and improve my skills.
            </Typography>

            <div className="flex gap-8 mb-8">
              <div className="flex bg-slate-600 hover:bg-slate-700 p-3 rounded-xl gap-3 items-center justify-start">
                <Typography variant="overline" className="w-min">
                  {calculateYearsFromDate('2019-07-01')}+
                </Typography>
                <div className="">years of experience</div>
              </div>

              <div className="flex bg-slate-600 hover:bg-slate-700 p-3 rounded-xl gap-3 items-center">
                <Typography variant="overline" className="w-min">
                  <ReactLogo />
                </Typography>
                <div className="">years of experience</div>
              </div>

              <div className="flex bg-slate-600 hover:bg-slate-700 p-3 rounded-xl gap-3 items-center">
                <Typography variant="overline" className="w-min">
                  4+
                </Typography>
                <div className="">years of experience</div>
              </div>
            </div>

            <Typography variant="h3">My Stack</Typography>
            <Typography variant="subtitle1" className="mb-4">
              Application & Data
            </Typography>
            <div className="grid grid-cols-6 gap-8">
              <div className={styles.stackItem}>
                <img className="rounded-md" src={reactLogo} alt="React" width={60} height={60} />
                <Typography variant="caption">React</Typography>
              </div>

              <div className={styles.stackItem}>
                <img className="rounded-md" src={typescriptLogo} alt="React" width={60} height={60} />
                <Typography variant="caption">TypeScript</Typography>
              </div>

              <div className={styles.stackItem}>
                <img className="rounded-md" src={javascriptLogo} alt="React" width={60} height={60} />
                <Typography variant="caption">JavaScript</Typography>
              </div>

              <div className={styles.stackItem}>
                <img className="rounded-md" src={nextjsLogo} alt="React" width={60} height={60} />
                <Typography variant="caption">NextJS</Typography>
              </div>

              <div className={styles.stackItem}>
                <img className="rounded-md" src={cypressLogo} alt="React" width={60} height={60} />
                <Typography variant="caption">Cypress</Typography>
              </div>

              <div className={styles.stackItem}>
                <img className="rounded-md" src={viteLogo} alt="React" width={60} height={60} />
                <Typography variant="caption">Vite</Typography>
              </div>

              <div className={styles.stackItem}>
                <img className="rounded-md" src={postmanLogo} alt="React" width={60} height={60} />
                <Typography variant="caption">Postman</Typography>
              </div>

              <div className={styles.stackItem}>
                <img className="rounded-md" src={html5Logo} alt="React" width={60} height={60} />
                <Typography variant="caption">HTML 5</Typography>
              </div>

              <div className={styles.stackItem}>
                <img className="rounded-md" src={css3Logo} alt="React" width={60} height={60} />
                <Typography variant="caption">CSS 3</Typography>
              </div>
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
