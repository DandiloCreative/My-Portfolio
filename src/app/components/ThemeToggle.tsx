"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const isDark = theme === "dark";

    const toggle = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="relative flex items-center w-16 h-8 rounded-full border border-white/20 bg-black/30 backdrop-blur-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-colors duration-300"
        >
            {/* Track fill */}
            <div
                className={`absolute inset-0 rounded-full transition-colors duration-300 ${isDark ? "bg-zinc-800" : "bg-white/80"
                    }`}
            />

            {/* Icons */}
            <Sun
                size={12}
                className={`absolute left-2 z-10 transition-all duration-300 ${isDark ? "text-zinc-500 opacity-50" : "text-amber-500 opacity-100"
                    }`}
            />
            <Moon
                size={12}
                className={`absolute right-2 z-10 transition-all duration-300 ${isDark ? "text-indigo-300 opacity-100" : "text-zinc-400 opacity-50"
                    }`}
            />

            {/* Thumb */}
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                className={`absolute z-20 w-6 h-6 rounded-full shadow-md ${isDark ? "bg-zinc-900 border border-white/10" : "bg-white border border-black/10"
                    }`}
                style={{ left: isDark ? "calc(100% - 1.75rem)" : "0.25rem" }}
            />
        </motion.button>
    );
}
