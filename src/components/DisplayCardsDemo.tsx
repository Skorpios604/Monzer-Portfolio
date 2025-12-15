"use client";

import DisplayCards from "./DisplayCards";
import { Sparkles } from "lucide-react";

const defaultCards = [
    {
        icon: <Sparkles className="size-4 text-blue-300" />,
        title: "Featured",
        description: "Discover amazing content",
        date: "Just now",
        iconClassName: "text-blue-500",
        titleClassName: "text-gray-200",
        className:
            "[grid-area:stack] hover:-translate-y-80 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 before:pointer-events-none",
    },
    {
        icon: <Sparkles className="size-4 text-blue-300" />,
        title: "AI Summit",
        description: "Vancouver | Oct 19-20",
        date: "Upcoming",
        iconClassName: "text-blue-500",
        titleClassName: "text-gray-200",
        image: "/p26/ai-summit.png",
        className:
            "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-64 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 before:pointer-events-none",
    },
    {
        icon: <Sparkles className="size-4 text-blue-300" />,
        title: "Checkmate @ BlueWave Labs",
        description: "🚀Top contributor on this open sourced project that accumulated over 8500 GitHub stars🌟",
        date: "Just now",
        iconClassName: "text-blue-500",
        titleClassName: "text-gray-200",
        image: "/p26/checkmate.png",
        link: "https://github.com/bluewave-labs/Checkmate",
        className:
            "[grid-area:stack] translate-x-24 translate-y-20 hover:-translate-y-40",
    },
];

export function DisplayCardsDemo() {
    return (
        <div className="flex min-h-[400px] w-full items-center justify-center py-20 pointer-events-auto">
            <div className="w-full max-w-5xl">
                <DisplayCards cards={defaultCards} />
            </div>
        </div>
    );
}
