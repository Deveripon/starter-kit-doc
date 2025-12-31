import { Geist, Geist_Mono, Newsreader } from 'next/font/google';

import '../global.css';

const fontSans = Geist({
    subsets: ['latin'],
    variable: '--font-sans',
});

const fontMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
});

const fontSerif = Newsreader({
    subsets: ['latin'],
    style: ['italic', 'normal'],
    variable: '--font-serif',
});

export const metadata = {
    title: 'NextNest Starter | Premium Fullstack Toolkit',
    description:
        'The ultimate starter kit for Next.js, NestJS, Tailwind CSS 4, Prisma, and BetterAuth. Scalable, type-safe, and industry-ready.',
    keywords: [
        'Next.js',
        'NestJS',
        'Tailwind CSS',
        'Prisma',
        'BetterAuth',
        'Starter Kit',
        'Monorepo',
        'TypeScript',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            suppressHydrationWarning
            className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable} font-sans antialiased min-h-screen overflow-x-hidden`}>
            {children}
        </div>
    );
}

