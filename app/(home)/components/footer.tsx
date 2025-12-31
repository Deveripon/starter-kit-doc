import { Layers } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='py-12 px-6 border-t border-fd-border bg-fd-background relative z-10'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='flex items-center gap-2'>
                    <span className='text-brand flex items-center justify-center p-1 rounded-md bg-brand/10'>
                        <Layers className='w-4 h-4' />
                    </span>
                    <span className='text-sm font-bold text-fd-foreground'>
                        NextNest Starter
                    </span>
                </div>
                <div className='flex gap-8 text-[11px] font-bold text-fd-muted-foreground uppercase tracking-widest'>
                    <Link
                        href='/docs'
                        className='hover:text-fd-foreground transition-colors'>
                        Docs
                    </Link>
                    <Link
                        href='#'
                        className='hover:text-fd-foreground transition-colors'>
                        Privacy
                    </Link>
                    <Link
                        href='#'
                        className='hover:text-fd-foreground transition-colors'>
                        Twitter
                    </Link>
                    <Link
                        href='#'
                        className='hover:text-fd-foreground transition-colors'>
                        Feedback
                    </Link>
                </div>
                <p className='text-[10px] text-fd-muted-foreground/60 font-bold uppercase tracking-widest'>
                    © {new Date().getFullYear()} ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
