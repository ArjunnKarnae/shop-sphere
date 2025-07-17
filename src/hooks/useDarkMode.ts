import { useEffect, useState } from "react";

type Theme = 'light' | 'dark';

const useDarkMode = (): [Theme, () => void] => {

    const[theme, setTheme] = useState<Theme>(() => {
        if(typeof window !== 'undefined'){
            const storedTheme = localStorage.getItem('theme');
            if(storedTheme){
                return storedTheme as Theme;
            }
            if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return 'light';
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark'? 'light': 'dark'));
    }

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const root = window.document.documentElement;
            root.classList.remove(theme === 'dark'? 'light': 'dark');
            root.classList.add(theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    return [theme, toggleTheme];

}

export default useDarkMode;