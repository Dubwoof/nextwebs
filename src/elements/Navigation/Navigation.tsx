import { JSX } from 'react';
import { NavigationProps } from './Navigation.types';
import { styles } from './Navigation.styles';

export function Navigation({ logo }: NavigationProps): JSX.Element {
  return (
    <div className={styles.nav}>
      <div className={styles.navLine}>
        {logo}
        <div className={styles.textLinks}>{/* {links} */} textlinks</div>
        <div className={styles.icons}>{/* {icon links} */}</div>
      </div>
    </div>
  );
}
