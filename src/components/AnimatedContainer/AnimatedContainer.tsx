import { Transition } from '@headlessui/react';
import { PropsWithChildren } from 'react';

export interface AnimatedContainerProps extends PropsWithChildren {
  isExpanded?: boolean;
  className?: string;
}
export function AnimatedContainer({ children, className, isExpanded = false }: AnimatedContainerProps): JSX.Element {
  return (
    <Transition
      show={isExpanded}
      enter="transition-all duration-500"
      enterFrom="opacity-0 max-h-0"
      enterTo="opacity-100 max-h-screen"
      className={className}
    >
      <div className="max-h-screen">{children}</div>
    </Transition>
  );
}
