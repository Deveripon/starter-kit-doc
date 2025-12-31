import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import React from 'react';

const SECTIONS: Record<string, string> = {
    docs: 'brand',
};

function getSection(path: string | undefined): string {
    if (!path) return 'brand';
    const key = path.split('/')[0];
    return SECTIONS[key] || 'brand';
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <DocsLayout
            tree={source.pageTree}
            {...baseOptions()}
            sidebar={{
                tabs: {
                    transform(option, node) {
                        const meta = source.getNodeMeta(node);
                        if (!meta || !node.icon) return option;

                        const color = `var(--color-fd-${getSection(
                            meta.path
                        )})`;

                        return {
                            ...option,
                            icon: (
                                <div
                                    className='[&_svg]:size-full rounded-lg size-full text-[--fd-color] max-md:bg-[--fd-color]/10 max-md:border max-md:p-1.5'
                                    style={
                                        {
                                            '--fd-color': color,
                                        } as any
                                    }>
                                    {node.icon}
                                </div>
                            ),
                        };
                    },
                },
            }}>
            {children}
        </DocsLayout>
    );
}

