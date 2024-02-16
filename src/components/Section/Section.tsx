import { PropsWithChildren } from 'react';
import { styles } from './Section.styles';

export function Section({ children }: PropsWithChildren) {
  return <section className={styles.section}>{children}</section>;
}
