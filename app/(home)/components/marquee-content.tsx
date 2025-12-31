import TechLogo from "./tech-logo";

const TECH_STACK = [
    {
        name: 'Next.js',
        src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
    },
    { name: 'NestJS', src: 'https://cdn.worldvectorlogo.com/logos/nestjs.svg' },
    {
        name: 'Prisma',
        src: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
    },
    {
        name: 'PostgreSQL',
        src: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
    },
    {
        name: 'Tailwind CSS',
        src: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
    },
    { name: 'BetterAuth', src: '/images/better-auth.png' },
    {
        name: 'TurboRepo',
        src: '/images/turborepo.jpg',
    },
    {
        name: 'TypeScript',
        src: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
    },
];

function MarqueeContent() {
    return (
        <div className='flex animate-marquee whitespace-nowrap gap-16 items-center min-w-full pr-16'>
            {TECH_STACK.map((tech, i) => (
                <TechLogo key={i} name={tech.name} src={tech.src} />
            ))}
            {/* Duplicate for seamless loop */}
            {TECH_STACK.map((tech, i) => (
                <TechLogo key={`dup-${i}`} name={tech.name} src={tech.src} />
            ))}
        </div>
    );
}


export default MarqueeContent;
