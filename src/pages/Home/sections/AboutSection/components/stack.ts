import reactLogo from '../../../../../assets/stack/react.png';
import cypressLogo from '../../../../../assets/stack/cypress.png';
import nextjsLogo from '../../../../../assets/stack/nextjs.png';
import javascriptLogo from '../../../../../assets/stack/javascript.jpeg';
import tailwindcssLogo from '../../../../../assets/stack/tailwindcss.png';
import typescriptLogo from '../../../../../assets/stack/typescript.jpeg';
import viteLogo from '../../../../../assets/stack/vite.png';
import nestjsLogo from '../../../../../assets/stack/nestjs.jpeg';
import nodejsLogo from '../../../../../assets/stack/nodejs.png';
import rustLogo from '../../../../../assets/stack/rust.png';
import awsLogo from '../../../../../assets/stack/aws.jpeg';
import graphqlLogo from '../../../../../assets/stack/graphql.png';
import scrumLogo from '../../../../../assets/stack/scrum.png';
import restLogo from '../../../../../assets/stack/rest.png';
import firebaseLogo from '../../../../../assets/stack/firebase.jpeg';
import reactNativeLogo from '../../../../../assets/stack/react-native.jpeg';
import jestLogo from '../../../../../assets/stack/jest.png';
import webpackLogo from '../../../../../assets/stack/webpack.png';

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
  { name: 'Jest', logo: jestLogo, category: 'applicationAndData' },
  { name: 'GraphQL', logo: graphqlLogo, category: 'applicationAndData' },
  { name: 'RESTful', logo: restLogo, category: 'applicationAndData' },
  { name: 'Vite', logo: viteLogo, category: 'applicationAndData' },
  { name: 'Webpack', logo: webpackLogo, category: 'applicationAndData' },
  { name: 'Scrum/Agile', logo: scrumLogo, category: 'applicationAndData' },
  // { name: 'Postman', logo: postmanLogo, category: 'applicationAndData' },
  { name: 'NodeJS', logo: nodejsLogo, category: 'applicationAndData' },
  { name: 'TailwindCSS', logo: tailwindcssLogo, category: 'applicationAndData' },
  { name: 'Firebase', logo: firebaseLogo, category: 'applicationAndData' },
  { name: 'React Native', logo: reactNativeLogo, category: 'applicationAndData' },
  // { name: 'HTML 5', logo: html5Logo, category: 'applicationAndData' },
  // { name: 'CSS 3', logo: css3Logo, category: 'applicationAndData' },
  // { name: 'Nx', logo: nxLogo, category: 'inProgress' },
  { name: 'NestJS', logo: nestjsLogo, category: 'inProgress' },
  { name: 'Rust', logo: rustLogo, category: 'inProgress' },
  { name: 'AWS', logo: awsLogo, category: 'inProgress' },
];
