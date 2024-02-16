import { ReactNode } from 'react';

export interface NavigationProps {
  logo: ReactNode;
  routes: NavigationRoute[];
}

export interface NavigationRoute {
  path: string;
  icon?: ReactNode;
  isPrimary?: boolean;
  label: string;
  onClick?: () => void;
}
