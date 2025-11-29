'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PrivacyRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/incognitoverse/privacy');
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-sm">Redirecting to Privacy Policy...</p>
    </div>
  );
}
