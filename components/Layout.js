import React from "react";
import Header from "../components/Header/Header";

import HeroSection from "./HeroSection/HeroSection";
import HeaderMenu from "./Header/HeaderMenu";
import ThemeToggle from "./ThemeToggle";
import {useRouter} from "next/router";



const Layout = ({children}) => {
    const {locale} = useRouter()

    return (

        <div className={'dark:bg-dark400 '}  dir={locale === 'ar' ? 'rtl' : 'ltr'} >
            <Header />
            <HeaderMenu />
            <HeroSection/>
            <div >
                {children}
            </div>
            <div >
                <ThemeToggle/>
                <h3>Browse and listen to music of your choice</h3>
            </div>
        </div>
    );
};
export default Layout;