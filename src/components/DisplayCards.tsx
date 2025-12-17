"use client";

import { cn } from "../lib/utils";
import { Sparkles } from "lucide-react";
import React from "react";
import ElectricBorder from "./ElectricBorder";

interface DisplayCardProps {
    className?: string;
    icon?: React.ReactNode;
    title?: string;
    description?: string;

    iconClassName?: string;
    titleClassName?: string;
    image?: string;
    link?: string;
}

function DisplayCard({
    className,
    icon = <Sparkles className="size-4 text-blue-300" />,
    title = "Featured",
    description = "Discover amazing content",

    titleClassName = "text-blue-500",
    image,
    link,
}: DisplayCardProps) {
    const content = (
        <div className="flex h-full flex-col justify-between px-4 py-3">
            <div className="flex items-center gap-2">
                <span className="relative inline-block rounded-full bg-blue-800 p-1">
                    {icon}
                </span>
                <p className={cn("text-lg font-medium transition-colors duration-300 group-hover:text-[hsl(300,100%,65%)]", titleClassName)}>{title}</p>
            </div>
            {image && (
                <img src={image} alt={title} className="h-60 w-full rounded-lg object-cover object-top" />
            )}
            <p className="text-lg text-gray-300 text-center">{description}</p>

        </div>
    );

    return (
        <ElectricBorder
            color="#9b5de5"
            className={cn(
                "group relative h-[23.3rem] w-[57rem] -skew-y-[8deg] select-none rounded-xl bg-muted/70 backdrop-blur-sm transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[51.75rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] after:pointer-events-none hover:bg-muted",
                className
            )}
            style={{ borderRadius: 12 }} // Matching rounded-xl approx 12px
        >
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full cursor-pointer"
                >
                    {content}
                </a>
            ) : content}
        </ElectricBorder>
    );
}

interface DisplayCardsProps {
    cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
    const defaultCards = [
        {
            className: "[grid-area:stack] hover:-translate-y-80 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration:700 before:left-0 before:top-0",
        },
        {
            className: "[grid-area:stack] translate-x-[250px] translate-y-10 hover:-translate-y-64 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration:700 before:left-0 before:top-0",
            title: "AI Summit",
            description: "Vancouver | Oct 19-20",

            image: "/ai-summit.png",
        },
        {
            className: "[grid-area:stack] translate-x-[500px] translate-y-20 hover:-translate-y-40",
        },
    ];

    const displayCards = cards || defaultCards;

    return (
        <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
            {displayCards.map((cardProps, index) => (
                <DisplayCard key={index} {...cardProps} />
            ))}
        </div>
    );
}
