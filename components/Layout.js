import React, {useCallback, useState} from "react";
import Header from "../components/Header/Header";

import HeroSection from "./HeroSection/HeroSection";
import HeaderMenu from "./Header/HeaderMenu";
import ThemeToggle from "./ThemeToggle";
import {useRouter} from "next/router";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import SideBarSkeleton from "./SideBarSkeleton";
import Footer from "./Footer/Footer";


const Layout = ({children}) => {
    const {locale, pathname} = useRouter()
    const [queueMenu, setQueueMenu] = useState(false)
    const handleSetQueueMenu = useCallback((queueMenu) => {
        setQueueMenu(queueMenu);
    }, []);
    // TODO: make music player dynamic on play
    const showWidgets = pathname !== "/login" && pathname !== "/profile" && pathname !== "/register";
    return (
        <>
            <div className={'dark:bg-dark400 font-poppins'} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                <Header/>
                {showWidgets &&<HeaderMenu/>}
                <div className={`mb-auto min-h-[76.73vh]`}>
                    {children}
                </div>

            </div>
            <Footer/>

            {showWidgets && <>
                <MusicPlayer toggleQueueMenuCallBack={handleSetQueueMenu}/>
                <SideBarSkeleton toggleQueueMenuCallBack={handleSetQueueMenu} open={queueMenu}/>
            </>}
        </>

    );
};
export default Layout;