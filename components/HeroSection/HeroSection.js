import React from 'react';
import Image from "next/image"
function HeroSection(props) {
    return (
        <div className={`mb-20 h-144`}>
            <div className={`w-full h-screen relative bg-gradient-to-b rounded-lg 
                from-blue-400 via-green-500 to-red-500`}>
                <div className={`z-10 absolute w-full h-full bg-gradient-to-b from-transparent via-[#00000082] to-dark400`}></div>
                <Image src={'https://picsum.photos/1700/1700'} layout='fill'
                       objectFit='cover' className={``}/>
            </div>
        </div>

    );
}

export default HeroSection;