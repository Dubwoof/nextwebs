import { JSX } from 'react';
import { NavigationProps } from './Navigation.types';
import { styles } from './Navigation.styles';
import Button from '../../elements/Button/Button';
import { Link } from 'react-router-dom';

export function Navigation({ logo, routes }: NavigationProps): JSX.Element {
  return (
    <div className={styles.nav}>
      <div className={styles.navLine}>
        <Link  to="/">{logo}</Link>
        <div className={styles.textLinks}>
          {routes.map((route, index) => {
            return (
              <Button key={index} isPrimary={route.isPrimary} onClick={route.onClick}>
                {route.label}
              </Button>
            );
          })}
        </div>
        <div className={styles.icons}>{/* {icon links} */}</div>
      </div>
    </div>
  );
}
