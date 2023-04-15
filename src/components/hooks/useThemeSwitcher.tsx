import {useEffect, useState} from "react";
import {LocalStorageService} from "@component/local-storage-service";
const useThemeSwitcher = () => {
    const preferredTheme: string = "(prefer-color-scheme: light)";

    const [ theme, setTheme ] = useState("");

    useEffect(()=> {
        const mediaQuery: MediaQueryList = window.matchMedia(preferredTheme);
        const userPref = LocalStorageService.retrieve('theme');

        const handleChange = () => {
            let check: string = '';
            if(userPref) {
                check = userPref === 'dark' ? 'dark' : 'light';
                setTheme(check);
            }
            else {
                check = mediaQuery.matches ? 'dark': 'light';
                setTheme(check);
            }

            if(check === 'dark') {
                document.documentElement.classList.add('dark')
            }
            else {
                document.documentElement.classList.remove('dark')
            }
        }

        mediaQuery.addEventListener('change', handleChange)

        return () =>  mediaQuery.removeEventListener('change', handleChange)
    }, []);

    useEffect(()=> {
        if(theme === 'dark') {
            LocalStorageService.store('theme', 'dark');
            document.documentElement.classList.add('dark')
        }
        else {
            LocalStorageService.store('theme', 'light');
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

   return [ theme, setTheme ] as const;
};
export default useThemeSwitcher;
