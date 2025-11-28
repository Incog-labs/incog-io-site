import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const repoBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.trim().replace(/\/+$/, '') ?? '';
const basePath = repoBasePath ? `/${repoBasePath.replace(/^\//, '')}` : '';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  output: 'export',
};

export default withMDX(nextConfig);
