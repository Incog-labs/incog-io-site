'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { NeonComingSoon } from './NeonComingSoon';

type Particle = {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
};

type FireworkParticle = {
  id: string;
  dx: number;
  dy: number;
  delay: number;
  color: string;
};

type FireworkBurst = {
  id: string;
  particles: FireworkParticle[];
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/|\/$/g, '')}`
  : '';
const withBasePath = (path: string) => `${basePath}${path}`;

const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const format = (value: number, decimals = 4) => value.toFixed(decimals);

const createParticles = (count = 2500): Particle[] =>
  Array.from({ length: count }, (_, id) => ({
    id,
    left: `${format(pseudoRandom(id) * 100)}%`,
    top: `${format(100 + pseudoRandom(id + 1000) * 30)}%`,
    delay: `${format(pseudoRandom(id + 2000) * 20, 3)}s`,
    duration: `${format(15 + pseudoRandom(id + 3000) * 60, 3)}s`,
  }));

export function ComingSoon() {
  const particles = useMemo(() => createParticles(), []);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioStatus, setAudioStatus] = useState<'playing' | 'muted'>('muted');
  const [fireworks, setFireworks] = useState<FireworkBurst[]>([]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.5;
    // No autoplay to respect accessibility; user must opt-in via the button.
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setAudioStatus('muted');
      return;
    }

    try {
      await audio.play();
      setAudioStatus('playing');
      triggerFireworks();
    } catch {
      setAudioStatus('muted');
    }
  };

  const triggerFireworks = () => {
    const burstId = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const colors = ['#ffffff', '#f87171', '#ef4444'];
    const particles: FireworkParticle[] = Array.from({ length: 14 }, (_, i) => {
      const angle = (i / 14) * Math.PI * 2;
      const magnitude = 32 + Math.random() * 18;
      return {
        id: `${burstId}-${i}`,
        dx: Math.cos(angle) * magnitude,
        dy: Math.sin(angle) * magnitude * -1,
        delay: Math.random() * 100,
        color: colors[i % colors.length],
      };
    });

    const burst: FireworkBurst = { id: burstId, particles };
    setFireworks((prev) => [...prev, burst]);

    setTimeout(() => {
      setFireworks((prev) => prev.filter((b) => b.id !== burstId));
    }, 900);
  };

  return (
    <div className='relative min-h-screen bg-black text-white flex flex-col'>
      <audio
        ref={audioRef}
        src={withBasePath('/audio/fantasia.mp3')}
        preload='auto'
        className='hidden'
      />
      <div
        className='absolute inset-0 pointer-events-none z-20 overflow-hidden'
        aria-hidden
      >
        {particles.map((particle) => (
          <span
            key={particle.id}
            className='cosmic-dust block'
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <main className='relative z-10 flex-1 flex items-center justify-center px-4 py-12 overflow-visible'>
        <NeonComingSoon />
      </main>

      <footer className='relative z-10 w-full py-6'>
        <div className='mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 px-4 text-sm'>
          <Link
            href='/incognitoverse/terms'
            className='text-white hover:text-gray-300 transition-colors duration-200'
          >
            Terms
          </Link>
          <span className='hidden sm:inline text-gray-700 text-sm'>•</span>
          <Link
            href='/incognitoverse/privacy'
            className='text-white hover:text-gray-300 transition-colors duration-200'
          >
            Privacy Policy
          </Link>
        </div>
      </footer>

      <div className='fixed bottom-4 right-4 z-30'>
        <div className='relative'>
          <button
            type='button'
            onClick={toggleAudio}
            className='w-28 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            {audioStatus === 'playing' ? 'Mute Sound' : 'Play Vibe'}
          </button>
          <div className='pointer-events-none absolute inset-0 -translate-y-1 overflow-visible'>
            {fireworks.map((burst) =>
              burst.particles.map((p) => (
                <span
                  key={p.id}
                  className='firework-particle'
                  style={
                    {
                      '--dx': `${p.dx}px`,
                      '--dy': `${p.dy}px`,
                      animationDelay: `${p.delay}ms`,
                      backgroundColor: p.color,
                    } as CSSProperties
                  }
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
