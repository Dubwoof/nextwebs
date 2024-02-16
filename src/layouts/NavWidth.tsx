import { PropsWithChildren } from 'react';

export function NavWidth({ children }: PropsWithChildren): JSX.Element {
  return <div className="w-full max-w-navWidth mx-auto">{children}</div>;
}
