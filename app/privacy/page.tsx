import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Incog',
  description: 'Temporary HTML version of the privacy policy for routing verification.',
};

export default function PrivacyPage() {
  return (
    <>
      <div className='fixed top-6 left-6 z-30'>
        <Link
          href='/'
          className='group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur transition hover:border-white hover:bg-white/15'
        >
          <span className='transition-transform group-hover:-translate-x-0.5'>←</span>
          <span>Back</span>
        </Link>
      </div>

      <main className='min-h-screen bg-black text-white flex items-center justify-center px-6 py-12'>
        <article className='w-full max-w-3xl text-left space-y-6 text-sm md:text-base leading-relaxed'>
          <h1 className='text-3xl font-semibold'>Privacy Policy</h1>
          <p className='text-gray-200'>
            This HTML version is here to verify GitHub Pages routing without MDX. The full policy
            text remains in the repository for reference.
          </p>
          <p className='text-gray-200'>
            If you need a copy of the complete policy, please contact us at privacy@incog.io.
          </p>
        </article>
      </main>
    </>
  );
}
