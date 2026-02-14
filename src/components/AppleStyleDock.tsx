import {
    BookOpen,
    FileText,
    Github,
    Home,
    Linkedin,
} from 'lucide-react';
import resumeUrl from '../assets/3Resume.pdf';
import { Link } from 'react-router-dom';

import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';

const data = [
    {
        title: 'Home',
        icon: (
            <Home className='h-full w-full text-fuchsia-500 dark:text-fuchsia-400' />
        ),
        href: '/',
        external: false,
    },
    {
        title: 'LinkedIn',
        icon: (
            <Linkedin className='h-full w-full text-fuchsia-500 dark:text-fuchsia-400' />
        ),
        href: 'https://www.linkedin.com/in/monzermourad/',
        external: true,
    },
    {
        title: 'GitHub',
        icon: (
            <Github className='h-full w-full text-fuchsia-500 dark:text-fuchsia-400' />
        ),
        href: 'https://github.com/Skorpios604',
        external: true,
    },
    {
        title: 'Blog',
        icon: (
            <BookOpen className='h-full w-full text-fuchsia-500 dark:text-fuchsia-400' />
        ),
        href: '/blog',
        external: false,
    },
    {
        title: 'Resume',
        icon: (
            <FileText className='h-full w-full text-fuchsia-500 dark:text-fuchsia-400' />
        ),
        href: resumeUrl,
        external: true,
    },
];

export function AppleStyleDock() {
    return (
        <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2 z-50'>
            <Dock className='items-end pb-3 bg-transparent dark:bg-transparent'>
                {data.map((item, idx) => (
                    item.external ? (
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
                    ) : (
                        <Link
                            key={idx}
                            to={item.href}
                            onClick={() => {
                                if (item.href === '/') {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                        >
                            <DockItem
                                className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
                            >
                                <DockLabel>{item.title}</DockLabel>
                                <DockIcon>{item.icon}</DockIcon>
                            </DockItem>
                        </Link>
                    )
                ))}
            </Dock>
        </div>
    );
}
