import { ReactNode } from 'react';
import { TypographyProps } from './Typography.types';

export function Typography({ variant, children, className, transform }: TypographyProps): JSX.Element {
  let transformedChildren: ReactNode = children;

  // Check if children is a string before applying transformations
  if (typeof children === 'string') {
    if (transform === 'uppercase') {
      transformedChildren = children.toUpperCase();
    } else if (transform === 'lowercase') {
      transformedChildren = children.toLowerCase();
    } else if (transform === 'capitalize') {
      transformedChildren = children.charAt(0).toUpperCase() + children.slice(1);
    }
  }

  if (variant === 'overline') {
    return (
      <p
        className={`w-full text-3xl font-robotoBold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500 lg:text-6xl ${className}`}
      >
        {transformedChildren}
      </p>
    );
  }

  if (variant === 'h1') {
    return <h1 className={`text-xl font-robotoBold lg:text-3xl ${className}`}>{transformedChildren}</h1>;
  }

  if (variant === 'h2') {
    return <h2 className={`text-lg font-robotoBold lg:text-2xl ${className}`}>{transformedChildren}</h2>;
  }

  if (variant === 'h3') {
    return <h3 className={`text-base font-robotoBold lg:text-lg ${className}`}>{transformedChildren}</h3>;
  }

  if (variant === 'subtitle1') {
    return <p className={`text-base font-robotoRegular lg:text-lg ${className}`}>{transformedChildren}</p>;
  }

  if (variant === 'caption') {
    return <p className={`text-xs font-robotoRegular lg:text-sm ${className}`}>{transformedChildren}</p>;
  }

  return <p className={`text-base font-robotoRegular lg:text-base ${className}`}>{transformedChildren}</p>;
}
