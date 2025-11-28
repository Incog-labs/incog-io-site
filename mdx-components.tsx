import Link from 'next/link';
import type { ComponentProps } from 'react';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className='text-4xl font-semibold tracking-tight text-white mb-4' {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className='text-2xl font-semibold text-white mt-8 mb-3' {...props}>
        {children}
      </h2>
    ),
    p: ({ children, ...props }) => (
      <p className='text-gray-200 leading-relaxed mb-4' {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className='list-disc list-inside space-y-2 text-gray-200 mb-6' {...props}>
        {children}
      </ul>
    ),
    a: ({ href = '', children, ...props }: ComponentProps<'a'>) => (
      <Link
        href={href}
        {...props}
        className='text-gray-100 underline underline-offset-4 decoration-gray-500 hover:text-white hover:decoration-white transition-colors'
      >
        {children}
      </Link>
    ),
    ...components,
  };
}
