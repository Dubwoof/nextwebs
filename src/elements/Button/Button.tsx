import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
}

export function Button({ children, isPrimary, ...rest }: Props) {
  const style = isPrimary ? 'bg-primary' : 'bg-secondary';
  return (
    <button {...rest} className={style}>
      {children}
    </button>
  );
}

export default Button;
