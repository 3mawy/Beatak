import React, {useCallback, useState} from "react";
import Header from "../components/Header/Header";

import HeroSection from "./HeroSection/HeroSection";
import HeaderMenu from "./Header/HeaderMenu";
import ThemeToggle from "./ThemeToggle";
import {useRouter} from "next/router";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import SideBarSkeleton from "./SideBarSkeleton";



const Layout = ({children}) => {
    const {locale} = useRouter()
    const [queueMenu, setQueueMenu] = useState(false)
    const handleSetQueueMenu = useCallback((queueMenu) => {
        setQueueMenu(queueMenu);
    }, []);
    return (
<>        <div className={'dark:bg-dark400 '} dir={locale === 'ar' ? 'rtl' : 'ltr'} >
    <Header />
    <HeaderMenu />
    <HeroSection/>
    <div >
        {children}
    </div>

</div>
    <MusicPlayer toggleQueueMenuCallBack={handleSetQueueMenu}/>
    <SideBarSkeleton toggleQueueMenuCallBack={handleSetQueueMenu} open={queueMenu}/>
</>

    );
};
export default Layout;