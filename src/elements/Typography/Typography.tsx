import { TypographyProps } from './Typography.types';

export function Typography({ variant, children, className }: TypographyProps): JSX.Element {
  if (variant === 'overline') {
    return (
      <p
        className={`w-full text-6xl font-robotoBold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500 text-start lg:text-8xl ${className}`}
      >
        {children}
      </p>
    );
  }

  if (variant === 'h1') {
    return <h1 className={`text-xl font-robotoBold text-start lg:text-3xl ${className}`}>{children}</h1>;
  }

  if (variant === 'caption') {
    return <p className={`text-xs font-robotoRegular text-start lg:text-sm ${className}`}>{children}</p>;
  }

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
