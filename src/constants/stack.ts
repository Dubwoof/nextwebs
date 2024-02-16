interface StackItem {
  title: string;
  logoUrl: string;
}

type StackKey = 'React' | 'TypeScript'; // Define a union type for allowed keys

export const stack: Record<StackKey, StackItem> = {
  React: {
    title: 'React',
    logoUrl: './assets/stack/react.svg',
  },
  TypeScript: {
    title: 'TypeScript',
    logoUrl: './assets/stack/typescript.svg',
  },
};
