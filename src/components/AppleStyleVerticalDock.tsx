import {
    BookOpen,
    FileText,
    Github,
    Linkedin,
} from 'lucide-react';
import resumeUrl from '../assets/3Resume.pdf';

import { VerticalDock, VerticalDockIcon, VerticalDockItem, VerticalDockLabel } from './ui/vertical-dock';

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
        href: resumeUrl,
    },
];

export function AppleStyleVerticalDock() {
    return (
        <div className='fixed right-4 top-1/2 -translate-y-1/2 z-50'>
            <VerticalDock className='items-end bg-transparent dark:bg-transparent'>
                {data.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <VerticalDockItem
                            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
                        >
                            <VerticalDockLabel>{item.title}</VerticalDockLabel>
                            <VerticalDockIcon>{item.icon}</VerticalDockIcon>
                        </VerticalDockItem>
                    </a>
                ))}
            </VerticalDock>
        </div>
    );
}
