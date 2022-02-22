import React from "react";
import Header from "../components/Header/Header";

import HeroSection from "./HeroSection/HeroSection";
import HeaderMenu from "./Header/HeaderMenu";
import ThemeToggle from "./ThemeToggle";



const Layout = ({children}) => {

    return (

        <div className={'dark:bg-dark400 '}>
            <Header />
            <HeaderMenu />
            <HeroSection/>
            {children}
            <div >
                <ThemeToggle/>
                <h3>Browse and listen to music of your choice</h3>
            </div>
        </div>
    );
};
export default Layout;