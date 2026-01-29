import {
    BookOpen,
    FileText,
    Github,
    Linkedin,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';

const data = [
    {
        title: 'LinkedIn',
        icon: (
            <Linkedin className='h-full w-full text-fuchsia-500 dark:text-fuchsia-400' />
        ),
        href: 'https://www.linkedin.com/in/monzermourad/',
    },
    {
        title: 'GitHub',
        icon: (
            <Github className='h-full w-full text-fuchsia-500 dark:text-fuchsia-400' />
        ),
        href: 'https://github.com/Skorpios604',
    },
    {
        title: 'Blog',
        icon: (
            <BookOpen className='h-full w-full text-fuchsia-500 dark:text-fuchsia-400' />
        ),
        href: '#',
    },
    {
        title: 'Resume',
        icon: (
            <FileText className='h-full w-full text-fuchsia-500 dark:text-fuchsia-400' />
        ),
        href: '#',
    },
];

export function AppleStyleDock() {
    return (
        <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2'>
            <Dock className='items-end pb-3 bg-transparent dark:bg-transparent'>
                {data.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <DockItem
                            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
                        >
                            <DockLabel>{item.title}</DockLabel>
                            <DockIcon>{item.icon}</DockIcon>
                        </DockItem>
                    </a>
                ))}
            </Dock>
        </div>
    );
}
