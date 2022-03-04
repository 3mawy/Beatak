import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import React from 'react';
import SwiperCard from "./SwiperCard";
import {useMediaQuery} from "../hooks/useMediaQueryHook";
import {FreeMode} from 'swiper';

export default function HomeSwiper(props) {
    const {heading, style, data} = props
    const members = style === 'members'

    const isMobile = useMediaQuery(700)
    return (
        <div className={` md:px-5`}
        >
            <h1 className={`text-2xl mt-3 ms-2`}>
                {heading}
            </h1>
            <Swiper
                modules={[FreeMode]}
                spaceBetween={1}
                slidesPerView={1.8}
                freeMode
                breakpoints={{
                    480: {
                        slidesPerView: members ? 4 : 2,
                        spaceBetween: 1,
                    }
                    ,
                    640: {
                        slidesPerView: members ? 4 : 3,
                        spaceBetween: 1,
                    },
                    768: {
                        slidesPerView: members ? 4 : 4,
                        spaceBetween: 1,
                    },
                    1024: {
                        slidesPerView: members ? 6 : 5,
                        spaceBetween: 1,
                    },
                }}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((cardData) => (
                    <SwiperSlide key={cardData.name}>
                        <SwiperCard data={cardData} style={style}/>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>

    );
};

// <div className="flex justify-center">
//     <Image src="https://picsum.photos/50/50"
//          className="rounded-full object-center border-4 border-white -mt-6 shadow-lg align-center"/>
// </div>