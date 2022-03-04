import React from 'react';
import LanguageToggle from "../LanguageToggle";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {LogoutIcon} from "@heroicons/react/solid";
import {UserIcon} from "@heroicons/react/outline";
import ThemeToggle from "../ThemeToggle";
import HeaderCart from "./HeaderCart";
import {useTranslation} from "next-i18next";

function HeaderButtons(props) {
    const {data: session} = useSession()
    const {t} = useTranslation('header');

    const Rest = (
        <div className="ms-auto min-w-fit flex items-center ">
            <LanguageToggle/>
            <ThemeToggle/>
            <HeaderCart/>
        </div>)
    if (!session) {
        return (
            <div className="hidden  md:flex md:flex-1 md:items-center md:justify-end  px-4">
                <div
                    className="text-sm px-4 font-medium text-gray-700 hover:text-dark300 dark:hover:text-gray200">
                    <Link href="/login">
                        {t('signIn')}
                    </Link>
                </div>
                <span className="h-6 w-px  bg-gray200" aria-hidden="true"/>
                <a href="#"
                   className="text-sm px-4 font-medium text-gray-700 hover:text-dark300 dark:hover:text-gray200">
                    {t('createAccount')}
                </a>
            </div>
            )
    }

    // If session exists, display content
    return (
            <div  className="ms-auto min-w-fit flex items-center ">
                <div className="flex lg:ms-6">
                    <Link href="/profile" className="p-2 text-gray-400 hover:text-gray-500">
                        <UserIcon className="w-6 h-6" aria-hidden="true"/>
                    </Link>
                </div>
                <Link href="/" passHref>
                    <a
                        onClick={signOut}
                        className="bg-blue-800 text-white hover:bg-blue-600 flex items-center px-2 py-2 text-sm font-medium rounded-md">
                        <LogoutIcon className="w-5 h-5 mr-2"/>
                        Sign out
                    </a>
                </Link>
            </div>
        );
}

export default HeaderButtons;