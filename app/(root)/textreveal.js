"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div
            className="flex items-center justify-center bg-[#0E0E10] h-[25rem] rounded-2xl w-full"
            style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 25%, black 100%)',
                backdropFilter: 'blur(5px)', /* Optional: adds a frosted glass effect */
                WebkitBackdropFilter: 'blur(5px)', /* For Safari support */
                paddingTop: '5rem' /* Add some padding from the top edge */
            }}
        >
            <TextRevealCard text="You send the vibe" revealText="I raise the stakes">
                <TextRevealCardTitle>
                    Sometimes, you just need to see it.
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                    A little mystery never hurt—hover to uncover the secret text.
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}
