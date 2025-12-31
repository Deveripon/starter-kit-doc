'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';
import FadeUp from './fade-up';
import MarqueeContent from './marquee-content';

const HeroSection = () => {
    return (
        <section className='relative pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center'>
            <FadeUp>
                <Link
                    href='#pricing'
                    className='group relative inline-flex items-center gap-3 rounded-full border border-fd-border bg-fd-card/50 pr-4 pl-1.5 py-1.5 hover:border-fd-accent transition-all mb-10'>
                    <span className='rounded-full bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-[10px] font-bold text-brand tracking-widest uppercase'>
                        V1.0 IS LIVE
                    </span>
                    <span className='text-xs font-medium text-fd-muted-foreground flex items-center gap-1 group-hover:text-fd-foreground transition-colors'>
                        The ultimate monorepo starter
                        <ChevronRight className='w-3 h-3 text-fd-muted-foreground/60' />
                    </span>
                </Link>
            </FadeUp>

            <FadeUp delay='100ms'>
                <h1 className='text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-fd-foreground leading-[1.05] mb-6'>
                    Ship Smarter.
                    <br />
                    <span className='font-serif italic font-normal text-brand inline-block mt-2'>
                        Accelerate.
                    </span>
                </h1>
            </FadeUp>

            <FadeUp delay='200ms' className='max-w-2xl mx-auto'>
                <p className='text-lg md:text-xl text-fd-muted-foreground font-medium leading-relaxed mb-12'>
                    A premium Next.js & NestJS starter kit with BetterAuth,
                    Prisma, and Tailwind 4. Built for developers who refuse to
                    waste time on boilerplate.
                </p>
            </FadeUp>

            <FadeUp
                delay='300ms'
                className='flex flex-col sm:flex-row gap-4 justify-center items-center w-full'>
                <Button className='group h-14 px-8 rounded-full bg-brand hover:opacity-90 text-brand-foreground font-bold text-lg shadow-[0_0_20px_-5px_var(--color-brand)] transition-all'>
                    Start Building Now
                    <Sparkles className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </Button>

                <Button
                    variant='outline'
                    className='h-14 pl-2 pr-6 rounded-full bg-fd-card/50 border-fd-border hover:bg-fd-accent/50 text-fd-foreground font-bold backdrop-blur-sm transition-all'>
                    <div className='w-10 h-10 rounded-full bg-fd-foreground flex items-center justify-center mr-3'>
                        <Play className='w-4 h-4 text-fd-background fill-current ml-0.5' />
                    </div>
                    Watch Demo
                </Button>
            </FadeUp>

            {/* Logo Cloud / Tech Stack Marquee */}
            <FadeUp delay='400ms' className='mt-24 w-full'>
                <p className='text-[10px] font-bold text-fd-muted-foreground/60 uppercase tracking-[0.3em] mb-10'>
                    Powered By Industry Standards
                </p>
                <div className='relative flex overflow-hidden group'>
                    <MarqueeContent />
                </div>
            </FadeUp>
        </section>
    );
};

export default HeroSection;

