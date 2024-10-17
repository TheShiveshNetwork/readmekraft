"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    // Add or remove dark class based on the theme
    if (theme) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]); // Dependency on theme

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="relative p-2 flex items-center justify-center"
    >
      {/* Sun Icon */}
      <div className={`absolute w-6 h-6 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(255, 191, 0)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full feather feather-sun"
        >
          <circle cx="12" cy="12" r="5" id="id_101" />
          <line x1="12" y1="1" x2="12" y2="3" id="id_102" />
          <line x1="12" y1="21" x2="12" y2="23" id="id_103" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" id="id_104" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" id="id_105" />
          <line x1="1" y1="12" x2="3" y2="12" id="id_106" />
          <line x1="21" y1="12" x2="23" y2="12" id="id_107" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" id="id_108" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" id="id_109" />
        </svg>
      </div>

      {/* Moon Icon */}
      <div className={`absolute w-6 h-6 transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          width="22"  
          height="22"
        >
          <path
            id="Moon"
            d="M24.86,15.53a.5.5,0,0,0-.57,0A10.71,10.71,0,0,1,9.57.79.5.5,0,0,0,9,0,12.77,12.77,0,1,0,25,16,.5.5,0,0,0,24.86,15.53Z"
            fill="#7f59f3"
          ></path>
        </svg>
      </div>
    </button>
  );
}
