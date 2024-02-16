import { JSX } from 'react';
import { NavigationProps } from './Navigation.types';
import { styles } from './Navigation.styles';
import Button from '../../elements/Button/Button';

export function Navigation({ logo, routes }: NavigationProps): JSX.Element {
  return (
    <div className={styles.nav}>
      <div className={styles.navLine}>
        {logo}
        <div className={styles.textLinks}>
          {routes.map(route => {
            return <Button isPrimary={route.isPrimary}>{route.label}</Button>;
          })}
        </div>
        <div className={styles.icons}>{/* {icon links} */}</div>
      </div>
    </div>
  );
}
