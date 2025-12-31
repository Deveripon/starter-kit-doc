import { Layers } from 'lucide-react';
import Link from 'next/link';
const Navigation = () => {
    return (
        <nav className='sticky top-0 z-50 w-full border-b border-white/5 bg-fd-background/80 backdrop-blur-md'>
            <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <span className='text-brand flex items-center justify-center p-1.5 rounded-lg bg-brand/10 border border-brand/20'>
                        <Layers className='w-5 h-5' />
                    </span>
                    <span className='text-lg font-bold tracking-tight text-fd-foreground'>
                        NextNest
                    </span>
                </div>

                <div className='hidden md:flex items-center gap-8'>
                    <Link
                        href='#features'
                        className='text-sm font-medium text-fd-muted-foreground hover:text-brand transition-colors'>
                        Features
                    </Link>
                    <Link
                        href='#stack'
                        className='text-sm font-medium text-fd-muted-foreground hover:text-brand transition-colors'>
                        Tech Stack
                    </Link>
                    <Link
                        href='/docs'
                        className='text-sm font-medium text-fd-muted-foreground hover:text-brand transition-colors'>
                        Documentation
                    </Link>
                </div>

                {/*         <div className='flex items-center gap-4'>
                    <Link
                        href='/login'
                        className='hidden md:flex text-fd-muted-foreground hover:text-fd-foreground'>
                        Sign in
                    </Link>
                    <Link
                        href='/sign-up'
                        className='rounded-full flex justify-center items-center h-9 px-5 text-[12px] font-bold tracking-wide text-brand-foreground bg-brand hover:opacity-90 transition-all border-none'>
                        GET STARTED
                    </Link>
                </div> */}
            </div>
        </nav>
    );
};

export default Navigation;

