"use client";

import DisplayCards from "./DisplayCards";
import { Sparkles } from "lucide-react";
import cardImage3 from "../assets/card_image_3.png";

const defaultCards = [
    {
        icon: <Sparkles className="size-4 text-blue-300" />,
        title: "Featured",
        description: "✨Building an e-commerce website to showcase my frontend and backend skills 🛒💻",

        iconClassName: "text-blue-500",
        titleClassName: "text-gray-200",
        className: "w-[350px]",
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
        className: "w-[350px]",
    },
    {
        icon: <Sparkles className="size-4 text-blue-300" />,
        title: "Checkmate @ BlueWave Labs",
        description: "🚀Top contributor on this open sourced project that accumulated over 8500 GitHub stars🌟",

        iconClassName: "text-blue-500",
        titleClassName: "text-gray-200",
        image: "/p26/checkmate.png",
        link: "https://github.com/bluewave-labs/Checkmate",
        className: "w-[350px]",
    },
];

export function DisplayCardsDemo() {
    return (
        <div className="flex min-h-[400px] w-full items-center justify-center py-20 pointer-events-auto">
            <div className="w-full max-w-5xl mt-32">
                <DisplayCards cards={defaultCards} />
            </div>
        </div>
    );
}
