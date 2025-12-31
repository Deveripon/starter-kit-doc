'use client';

import {
    Box,
    Cpu,
    Github,
    Globe,
    Layers,
    Palette,
    ShieldCheck,
    Sparkles,
} from 'lucide-react';
import FadeUp from './fade-up';
import StackItem from './stack-item';

const TechStack = () => {
    return (
        <section id='stack' className='relative py-24 px-6 max-w-7xl mx-auto'>
            <FadeUp className='text-center mb-16'>
                <h2 className='text-4xl md:text-6xl font-serif text-fd-foreground mb-6 tracking-tight'>
                    Modern. Scalable.
                    <br />
                    <span className='italic text-brand'>Opinionated.</span>
                </h2>
                <p className='text-fd-muted-foreground text-lg max-w-2xl mx-auto font-medium'>
                    We chose the best tools so you don&apos;t have to. Every
                    piece of the stack is integrated for maximum efficiency.
                </p>
            </FadeUp>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <StackItem
                    icon={<Globe className='w-6 h-6 text-brand' />}
                    name='Next.js 15'
                    desc='React 19, Server Actions'
                />
                <StackItem
                    icon={<Cpu className='w-6 h-6 text-brand' />}
                    name='NestJS 11'
                    desc='Modular Backend Architecture'
                />
                <StackItem
                    icon={<Github className='w-6 h-6 text-brand' />}
                    name='TurboRepo'
                    desc='Optimized Monorepo Tooling'
                />
                <StackItem
                    icon={<Palette className='w-6 h-6 text-brand' />}
                    name='Tailwind 4'
                    desc='The Latest CSS Engine'
                />
                <StackItem
                    icon={<Box className='w-6 h-6 text-brand' />}
                    name='Prisma ORM'
                    desc='Type-safe Database Access'
                />
                <StackItem
                    icon={<ShieldCheck className='w-6 h-6 text-brand' />}
                    name='BetterAuth'
                    desc='Modern Auth Middleware'
                />
                <StackItem
                    icon={<Layers className='w-6 h-6 text-brand' />}
                    name='Shadcn UI'
                    desc='Premium Accessible Components'
                />
                <StackItem
                    icon={<Sparkles className='w-6 h-6 text-brand' />}
                    name='TypeScript'
                    desc='Robust & Type-Safe Code'
                />
            </div>
        </section>
    );
};

export default TechStack;

