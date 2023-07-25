import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPreference = window.localStorage.getItem("theme");

        const handleChange = () => {
            if(userPreference){
                let check = userPreference === "dark" ? "dark" : "light";
                setMode(check);
                if(check === "dark"){
                    document.documentElement.classList.add('dark');
                } else{
                    document.documentElement.classList.remove('dark');
                }
            } else{
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                if(check === "dark"){
                    document.documentElement.classList.add('dark');
                } else{
                    document.documentElement.classList.remove('dark');
                }
            }
        }

        handleChange();

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        }
    }, [])

    useEffect(() => {
        console.log(window.localStorage.getItem("theme"))
        if(mode === "dark"){
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add('dark');
        } 
        if(mode === "light") {
            window.localStorage.setItem("theme", "light");
        }
    }, [mode])

    return [mode, setMode]
}

export default useThemeSwitcher