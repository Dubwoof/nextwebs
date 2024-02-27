import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
}

export function Button({ children, className, isPrimary, ...rest }: Props) {
  const style = isPrimary ? 'bg-gradient-to-br from-blue-500 to-green-500' : 'bg-transparent';
  return (
    <button {...rest} className={cn(style, className)}>
      {children}
    </button>
  );
}

export default Button;
