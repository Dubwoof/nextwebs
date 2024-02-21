import { ReactNode } from 'react';

export interface TabsProps {
  children: ReactNode[];
}

export interface TabProps {
  children: ReactNode;
}

export interface TabChildProps {
  children: ReactNode;
  childType: 'title' | 'content';
}
