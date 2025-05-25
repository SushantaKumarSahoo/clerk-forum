"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

import WorldMapDemo from "@/app/map";
import {TextRevealCardPreview} from "@/app/textreveal";

export default function page() {
    return (
        <div>
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
                "Tired of echoes?<Highlight className="text-black dark:text-white">  Of messages, of messages? </Highlight>
                <br/>
                This is where the real conversation begins."{" "}
                <br />
                <Highlight className="text-black dark:text-white">
                    Right here. Right now.
                </Highlight>
            </motion.h1>
        </HeroHighlight>
            <WorldMapDemo/>
            <TextRevealCardPreview />
        </div>

    );
}
