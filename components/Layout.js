import React, {useCallback, useState} from "react";
import Header from "../components/Header/Header";

import HeroSection from "./HeroSection/HeroSection";
import HeaderMenu from "./Header/HeaderMenu";
import ThemeToggle from "./ThemeToggle";
import {useRouter} from "next/router";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import SideBarSkeleton from "./SideBarSkeleton";


const Layout = ({children}) => {
    const {locale, pathname} = useRouter()
    const [queueMenu, setQueueMenu] = useState(false)
    const handleSetQueueMenu = useCallback((queueMenu) => {
        setQueueMenu(queueMenu);
    }, []);
    // TODO: make music player dynamic on play
    const showMusicPlayer = pathname !== "/login" && pathname !== "/profile";
    return (
        <>
            <div className={'dark:bg-dark400 font-poppins'} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                <Header/>
                <HeaderMenu/>
                <div className={`mb-auto min-h-[76.73vh]`}>
                    {children}
                </div>

            </div>
            {showMusicPlayer && <div>
                <MusicPlayer toggleQueueMenuCallBack={handleSetQueueMenu}/>
                <SideBarSkeleton toggleQueueMenuCallBack={handleSetQueueMenu} open={queueMenu}/>
            </div>}

        </>

    );
};
export default Layout;