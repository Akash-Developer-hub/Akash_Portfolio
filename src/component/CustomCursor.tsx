import { useState, useEffect } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorType, setCursorType] = useState<"default" | "pointer" | "text">("default");

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            if (!target) return;

            // Priority: custom check > computed style fallback
            const tag = target.tagName.toLowerCase();
            const role = target.getAttribute("role");

            let computedCursor = "";

            if (
                tag === "button" ||
                tag === "a" ||
                tag === "select" ||
                tag === "option" ||
                tag === "label" ||
                role === "button"
            ) {
                setCursorType("pointer");
                computedCursor = "pointer";
            } else if (
                tag === "input" ||
                tag === "textarea" ||
                target.isContentEditable
            ) {
                setCursorType("text");
                computedCursor = "text";
            } else {
                // Fallback: try computed style
                computedCursor = window.getComputedStyle(target).cursor;
                if (computedCursor.includes("pointer")) {
                    setCursorType("pointer");
                } else if (computedCursor.includes("text")) {
                    setCursorType("text");
                } else {
                    setCursorType("default");
                }
            }
            console.log("Hovering:", target.tagName, "Cursor:", computedCursor);
        };

        document.body.style.cursor = "none"; // Hide system cursor
        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            document.body.style.cursor = ""; // Reset on cleanup
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    const getCursorSVG = () => {
        switch (cursorType) {
            case "pointer":
                return (
                    <g>
                        <circle cx="12" cy="12" r="8" fill="rgba(0, 0, 0, 0.2)" />
                        <path
                            d="M8 8l8 8m0-8l-8 8"
                            stroke="rgba(0, 0, 0, 0.8)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </g>
                );
            case "text":
                return (
                    <g>
                        <rect
                            x="10"
                            y="2"
                            width="4"
                            height="20"
                            rx="2"
                            fill="rgba(0, 0, 0, 0.6)"
                        />
                        <rect
                            x="10"
                            y="2"
                            width="4"
                            height="20"
                            rx="2"
                            stroke="rgba(0, 0, 0, 0.8)"
                            strokeWidth="1"
                        />
                    </g>
                );
            default:
                return (
                    <g>
                        <path
                            d="M2,2 L12,2 L22,12 L12,22 L2,12 Z"
                            fill="rgba(0, 0, 0, 0.3)"
                            stroke="rgba(0, 0, 0, 0.8)"
                            strokeLinejoin="round"
                        />
                        <circle cx="12" cy="12" r="2" fill="rgba(0, 0, 0, 0.8)" />
                    </g>
                );
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 9999,
                width: "24px",
                height: "24px",
                filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))",
                transition: "transform 0.1s ease-out"
            }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    transition: "all 0.15s ease-out",
                    transform: cursorType === "pointer" ? "scale(1.2)" : "scale(1)"
                }}
            >
                {getCursorSVG()}
            </svg>
        </div>
    );
};

export default CustomCursor;
