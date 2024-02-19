import { ReactLogo } from '../../../../../elements/ReactLogo/ReactLogo';
import { Typography } from '../../../../../elements/Typography/Typography';
import { calculateYearsFromDate } from '../../../../../utils/calculateYearsFromDate';
import reactLogo from '../../../../../assets/stack/react.png';
import cypressLogo from '../../../../../assets/stack/cypress.png';
import nextjsLogo from '../../../../../assets/stack/nextjs.png';
import javascriptLogo from '../../../../../assets/stack/javascript.jpeg';
import html5Logo from '../../../../../assets/stack/html5.png';
import css3Logo from '../../../../../assets/stack/css3.png';
import typescriptLogo from '../../../../../assets/stack/typescript.jpeg';
import viteLogo from '../../../../../assets/stack/vite.png';
import postmanLogo from '../../../../../assets/stack/postman.png';
import nstjsLogo from '../../../../../assets/stack/nestjs.jpeg';
import nodejsLogo from '../../../../../assets/stack/nodejs.png';
import rustLogo from '../../../../../assets/stack/rust.png';
import { NxLogo } from '../../../../../elements/NxLogo/NxLogo';
import cn from 'classnames';

const styles = {
  stackItem: 'flex flex-col items-center justify-center p-2 gap-1 bg-slate-600 rounded-xl hover:bg-slate-700 w-24 h-24',
  invisible: 'invisible',
};

export function Overview(): JSX.Element {
  return (
    <div className="text-start">
      <Typography variant="h2" transform="uppercase">
        About Me
      </Typography>
      <Typography variant="h3" className="mb-8">
        Hi, I'm Artur, a Software Engineer.
      </Typography>
      <Typography className="mb-8">
        I'm a software engineer with a passion for web development. With 4+ years of experience in the field, I have worked on a variety of
        projects, from small business websites to large-scale web applications. I'm always looking for new challenges and opportunities to
        grow and improve my skills.
      </Typography>

      <div className="flex gap-8 mb-8">
        <div className="flex bg-slate-600 hover:bg-slate-700 p-3 rounded-xl gap-3 items-center justify-start">
          <Typography variant="overline" className="w-min">
            {calculateYearsFromDate('2019-07-01')}+
          </Typography>
          <div className="">years of experience</div>
        </div>

        <div className="flex bg-slate-600 hover:bg-slate-700 p-3 rounded-xl gap-3 items-center">
          <ReactLogo />
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
      <div className="flex justify-between mb-8">
        <div className={styles.stackItem}>
          <img className="rounded-md" src={reactLogo} alt="React" width={60} height={60} />
          <Typography variant="caption">React</Typography>
        </div>

        <div className={styles.stackItem}>
          <img className="rounded-md" src={typescriptLogo} alt="TypeScript" width={60} height={60} />
          <Typography variant="caption">TypeScript</Typography>
        </div>

        <div className={styles.stackItem}>
          <img className="rounded-md" src={javascriptLogo} alt="JavaScript" width={60} height={60} />
          <Typography variant="caption">JavaScript</Typography>
        </div>

        <div className={styles.stackItem}>
          <img className="rounded-md" src={nextjsLogo} alt="NextJS" width={60} height={60} />
          <Typography variant="caption">NextJS</Typography>
        </div>

        <div className={styles.stackItem}>
          <img className="rounded-md" src={cypressLogo} alt="Cypress" width={60} height={60} />
          <Typography variant="caption">Cypress</Typography>
        </div>

        <div className={styles.stackItem}>
          <img className="rounded-md" src={viteLogo} alt="Vite" width={60} height={60} />
          <Typography variant="caption">Vite</Typography>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <div className={styles.stackItem}>
          <img className="rounded-md" src={postmanLogo} alt="Postman" width={60} height={60} />
          <Typography variant="caption">Postman</Typography>
        </div>

        <div className={styles.stackItem}>
          <img className="rounded-md" src={nodejsLogo} alt="NodeJS" width={60} height={60} />
          <Typography variant="caption">NodeJS</Typography>
        </div>

        <div className={styles.stackItem}>
          <img className="rounded-md" src={html5Logo} alt="HTML 5" width={60} height={60} />
          <Typography variant="caption">HTML 5</Typography>
        </div>

        <div className={styles.stackItem}>
          <img className="rounded-md" src={css3Logo} alt="CSS 3" width={60} height={60} />
          <Typography variant="caption">CSS 3</Typography>
        </div>

        <div className={cn(styles.stackItem, styles.invisible)}></div>
        <div className={cn(styles.stackItem, styles.invisible)}></div>
      </div>

      <Typography variant="subtitle1" className="mb-4">
        In Progress
      </Typography>
      <div className="flex justify-between mb-8">
        <div className={styles.stackItem}>
          <NxLogo />
          <Typography variant="caption">Nx</Typography>
        </div>

        <div className={styles.stackItem}>
          <img className="rounded-md" src={nstjsLogo} alt="NestJS" width={60} height={60} />
          <Typography variant="caption">NestJS</Typography>
        </div>

        <div className={styles.stackItem}>
          <img className="rounded-md" src={rustLogo} alt="React" width={60} height={60} />
          <Typography variant="caption">Rust</Typography>
        </div>

        <div className={cn(styles.stackItem, styles.invisible)}></div>
        <div className={cn(styles.stackItem, styles.invisible)}></div>
        <div className={cn(styles.stackItem, styles.invisible)}></div>
      </div>
    </div>
  );
}
