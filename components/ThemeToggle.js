import React, {useEffect, useState} from 'react';
import { SunIcon, MoonIcon} from '@heroicons/react/solid'
import {useTheme} from "next-themes";

const Toggle = () => {
    const { theme, setTheme } = useTheme();

    //const dark = theme === 'dark' ? true : false;

    const [mounted, setMounted] = useState(false);



    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);


    //TODO :: add loading component
    if (!mounted) return null;

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <SunIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 w-8 text-md cursor-pointer"
                />
            ) : (
                <MoonIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 w-8 text-md cursor-pointer"
                />
            )}
        </div>
    );
};

export default Toggle;