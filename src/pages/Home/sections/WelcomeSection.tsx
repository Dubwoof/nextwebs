import { JSX } from 'react';
import { Section } from '../../../components/Section/Section';
import Button from '../../../elements/Button/Button';
import { Typography } from '../../../elements/Typography/Typography';
import { NavWidth } from '../../../layouts/NavWidth';
import { BiChevronDown } from 'react-icons/bi';
import { Colors } from '../../../constants/Colors.enum';

export function WelcomeSection(): JSX.Element {
  function changeTab() {
    const changeTabEvent = new CustomEvent<number>('changeTab', {
      detail: 0,
    });
    window.dispatchEvent(changeTabEvent);
  }

  return (
    <Section>
      <NavWidth>
        <div className="flex flex-col justify-center text-center items-center min-h-[70vh] px-4 lg:px-0">
          <Typography variant="overline" transform="uppercase">
            welcome to nextwebs
          </Typography>
          <Typography variant="h1" className="mb-8">
            Enthusiastic Software Engineering to Build a Connected&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500">&#123;World&#125;</span>.
          </Typography>
          <Typography className="mb-8">
            Nextwebs is a home for passionate software enineering and web development. The goal is to build a connected world and make it a
            better place. Let's build the future together.
          </Typography>
          <div className="flex gap-8 justify-center mb-16">
            <Button isPrimary>Contact</Button>
            <Button onClick={changeTab}>About Me</Button>
          </div>
          <BiChevronDown size={60} color={Colors.TextLight} className="cursor-pointer" />
        </div>
      </NavWidth>
    </Section>
  );
}
