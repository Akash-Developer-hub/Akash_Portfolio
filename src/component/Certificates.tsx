"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function CertificateGallery({ certificates }: { certificates: Certificate[] }) {
    const [active, setActive] = useState<Certificate | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }
        document.body.style.overflow = active ? "hidden" : "auto";
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/30 dark:bg-white/10 z-10"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 grid place-items-center z-50">
                        <motion.button
                            key={`close-${active.title}`}
                            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-neutral-900 text-black dark:text-white shadow"
                            onClick={() => setActive(null)}
                        >
                            ✕
                        </motion.button>

                        <motion.div
                            layoutId={`cert-${active.title}-${id}`}
                            ref={ref}
                            className="bg-white dark:bg-neutral-900 max-w-2xl w-full rounded-xl overflow-hidden shadow-lg"
                        >
                            <motion.img
                                layoutId={`image-${active.title}-${id}`}
                                src={active.image}
                                alt={active.title}
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-4">
                                <motion.h2 className="text-lg font-bold dark:text-white">
                                    {active.title}
                                </motion.h2>
                                <motion.p className="text-sm text-neutral-600 dark:text-neutral-300">
                                    {active.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {certificates.map((cert) => (
                    <motion.div
                        layoutId={`cert-${cert.title}-${id}`}
                        key={cert.title}
                        onClick={() => setActive(cert)}
                        className="cursor-pointer rounded-xl overflow-hidden shadow border hover:scale-105 transition dark:bg-neutral-800 bg-white"
                    >
                        <motion.img
                            layoutId={`image-${cert.title}-${id}`}
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-100">
                                {cert.title}
                            </h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                {cert.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

function useOutsideClick(ref: React.RefObject<HTMLElement | null>, callback: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
}

export interface Certificate {
    title: string;
    description: string;
    image: string;
}
