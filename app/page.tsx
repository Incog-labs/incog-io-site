import type { Metadata } from 'next';
import { ComingSoon } from './components/ComingSoon';

export const metadata: Metadata = {
  title: 'Incog | Coming Soon',
  description: 'Incog is on the way. Stay tuned for what comes next.',
};

export default function Home() {
  return <ComingSoon />;
}
