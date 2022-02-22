import React, {useEffect, useState} from 'react';
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
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
                <CheckIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            ) : (
                <SelectorIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            )}
        </div>
    );
};

export default Toggle;