'use client';

import { Box } from 'lucide-react';
import Image from 'next/image';

function TechLogo({ name, src }: { name: string; src?: string }) {
    return (
        <div className='flex items-center gap-2 group/logo opacity-50 hover:opacity-100 transition-all duration-300'>
            <div className='w-8 h-8 relative flex items-center justify-center grayscale group-hover/logo:grayscale-0 transition-all'>
                {src ? (
                    <Image
                        src={src}
                        alt={name}
                        width={24}
                        height={24}
                        className='w-full h-full object-contain'
                    />
                ) : (
                    <div className='w-8 h-8 bg-white/10 rounded flex items-center justify-center'>
                        <Box className='w-4 h-4 text-gray-400' />
                    </div>
                )}
            </div>
            <span className='text-sm font-bold text-gray-500 group-hover/logo:text-gray-200 transition-colors cursor-default'>
                {name}
            </span>
        </div>
    );
}

export default TechLogo;

