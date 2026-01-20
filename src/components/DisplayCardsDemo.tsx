"use client";

import DisplayCards from "./DisplayCards";
import { Sparkles } from "lucide-react";
import cardImage3 from "../assets/card_image_3.png";

const defaultCards = [
    {
        icon: <Sparkles className="size-4 text-blue-300" />,
        title: "CyberCrate",
        description: "✨Building an e-commerce website to showcase my frontend and backend skills 🛒💻",

        iconClassName: "text-blue-500",
        titleClassName: "text-gray-200",
        className: "w-full max-w-[350px]",
        image: cardImage3,
        link: "https://skorpios604.github.io/E-commerce/",
    },
    {
        icon: <Sparkles className="size-4 text-blue-300" />,
        title: "AI Summit",
        description: "🚀Developed the official website for the 2nd Annual AI 🤖 Summit in Vancouver, hosting 1000+ attendees.✨",

        iconClassName: "text-blue-500",
        titleClassName: "text-gray-200",
        image: "/p26/ai-summit.png",
        link: "https://vanaisummit.com/",
        className: "w-full max-w-[350px]",
    },
    {
        icon: <Sparkles className="size-4 text-blue-300" />,
        title: "Checkmate @ BlueWave Labs",
        description: "🚀Top contributor on this open sourced project that accumulated over 8500 GitHub stars🌟",

        iconClassName: "text-blue-500",
        titleClassName: "text-gray-200",
        image: "/p26/checkmate.png",
        link: "https://github.com/bluewave-labs/Checkmate",
        className: "w-full max-w-[350px]",
    },
];

import IndustrialSwitch from "./ui/toggle-switch";

export function DisplayCardsDemo() {
    const scrollToCommits = (isOn: boolean) => {
        if (isOn) {
            const element = document.getElementById('commits-section');
            if (element) {
                const targetPosition = element.getBoundingClientRect().top + window.scrollY;
                const startPosition = window.scrollY;
                const distance = targetPosition - startPosition;
                const duration = 2000;
                let start: number | null = null;

                function step(timestamp: number) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const ease = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                    const percentage = Math.min(progress / duration, 1);

                    window.scrollTo(0, startPosition + distance * ease(percentage));

                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    }
                }
                window.requestAnimationFrame(step);
            }
        }
    };

    return (
        <div className="flex min-h-screen w-full flex-col pointer-events-auto">
            <div className="flex-1 flex items-center justify-center py-10 md:py-20">
                <div className="w-full max-w-7xl px-4 mt-56">
                    <DisplayCards cards={defaultCards} />
                </div>
            </div>
            <div className="pb-20 flex justify-center">
                <IndustrialSwitch onToggle={scrollToCommits} />
            </div>
        </div>
    );
}
