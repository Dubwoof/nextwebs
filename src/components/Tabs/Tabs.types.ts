import { ReactNode } from 'react';

export interface TabsProps {
  children: ReactNode[];
}

export interface TabProps {
  children: ReactNode;
  label: string;
}