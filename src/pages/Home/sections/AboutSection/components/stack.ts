import reactLogo from '../../../../../assets/stack/react.png';
import cypressLogo from '../../../../../assets/stack/cypress.png';
import nextjsLogo from '../../../../../assets/stack/nextjs.png';
import javascriptLogo from '../../../../../assets/stack/javascript.jpeg';
import tailwindcssLogo from '../../../../../assets/stack/tailwindcss.png';
import html5Logo from '../../../../../assets/stack/html5.png';
import css3Logo from '../../../../../assets/stack/css3.png';
import typescriptLogo from '../../../../../assets/stack/typescript.jpeg';
import viteLogo from '../../../../../assets/stack/vite.png';
import postmanLogo from '../../../../../assets/stack/postman.png';
import nestjsLogo from '../../../../../assets/stack/nestjs.jpeg';
import nodejsLogo from '../../../../../assets/stack/nodejs.png';
import rustLogo from '../../../../../assets/stack/rust.png';
import nxLogo from '../../../../../assets/stack/nx.jpeg';

interface StackItem {
  name: string;
  logo: string;
  category?: 'applicationAndData' | 'inProgress';
}

export const stack: StackItem[] = [
  { name: 'React', logo: reactLogo, category: 'applicationAndData' },
  { name: 'TypeScript', logo: typescriptLogo, category: 'applicationAndData' },
  { name: 'JavaScript', logo: javascriptLogo, category: 'applicationAndData' },
  { name: 'NextJS', logo: nextjsLogo, category: 'applicationAndData' },
  { name: 'Cypress', logo: cypressLogo, category: 'applicationAndData' },
  { name: 'Vite', logo: viteLogo, category: 'applicationAndData' },
  { name: 'Postman', logo: postmanLogo, category: 'applicationAndData' },
  { name: 'NodeJS', logo: nodejsLogo, category: 'applicationAndData' },
  { name: 'TailwindCSS', logo: tailwindcssLogo, category: 'applicationAndData' },
  { name: 'HTML 5', logo: html5Logo, category: 'applicationAndData' },
  { name: 'CSS 3', logo: css3Logo, category: 'applicationAndData' },
  { name: 'Nx', logo: nxLogo, category: 'inProgress' },
  { name: 'NestJS', logo: nestjsLogo, category: 'inProgress' },
  { name: 'Rust', logo: rustLogo, category: 'inProgress' },
];
