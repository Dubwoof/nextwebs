import { Transition } from '@headlessui/react';
import { PropsWithChildren } from 'react';

export interface AnimatedContainerProps extends PropsWithChildren {
  isExpanded?: boolean;
}
export function AnimatedContainer({ children, isExpanded = false }: AnimatedContainerProps): JSX.Element {
  return (
    <Transition
      show={isExpanded}
      enter="transition-all duration-500"
      enterFrom="opacity-0 max-h-0"
      enterTo="opacity-100 max-h-screen"
      className="mb-4"
    >
      <div className="max-h-screen">{children}</div>
    </Transition>
  );
}
