import { JSX } from 'react';
import { NavigationProps } from './Navigation.props';
import { styles } from './Navigation.styles';

export function Navigation({}: NavigationProps): JSX.Element {
  return (
    <div className={styles.nav}>
      <div className={styles.navLine}>
        logo
        <div className={styles.textLinks}>{/* {links} */} textlinks</div>
        <div className={styles.icons}>{/* {icon links} */}</div>
      </div>
    </div>
  );
}
