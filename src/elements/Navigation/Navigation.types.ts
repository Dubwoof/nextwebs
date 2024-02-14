import { ReactNode } from 'react';

export interface NavigationProps {
  logo: ReactNode;
  routes: NavigationRoute[];
  // toggleTheme: () => void;
}

export interface NavigationRoute {
  path: string;
  icon?: ReactNode;
}
