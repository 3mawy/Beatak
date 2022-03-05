import React from 'react';
import Image from "next/image"
import SearchBar from "../Header/SearchBar/SearchBar";
//TODO : refactor for light mode
function HeroSection(props) {
    return (
        <div className={`mb-20`}>
            <div className={`w-full h-screen60 relative rounded-lg justify-center grid`}>
                <div className={`ltr:left-0 rtl:right-0 bottom-5 absolute z-20`}>
                    <h1 className={`text-5xl ms-4 mb-2`}>Hello</h1>
                    <SearchBar/>
                </div>
                <div className={`z-10 absolute w-full h-full bg-gradient-to-b from-transparent  via-[#00000082] to-dark400 dark:to-dark400`}></div>
                <Image src={'https://picsum.photos/1700/1700'} layout='fill'
                       objectFit='cover' className={``}/>
            </div>
        </div>

    );
}

export default HeroSection;