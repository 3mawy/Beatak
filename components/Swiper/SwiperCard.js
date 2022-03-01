import React from 'react';
import {SwiperSlide} from "swiper/react";
import {PlayIcon} from "@heroicons/react/outline";

function CustomSlide(props) {
    const {data, style} = props
    const playlists = style === 'playlists'
    const tracks = style === 'tracks'
    const members = style === 'members'
    const genres = style === 'genres'
    const renderOverlay = () => {
        if(playlists || tracks) {
            return (
                <PlayIcon href={`/profile`} className={` absolute justify-self-center self-center w-10 h-10`}/>)
        }
        else if (genres) {
            return (
                <div className={`absolute text-center justify-center w-full h-full grid`}>
                    <a className={` self-center `}><h1 className={`text-2xl uppercase`}>{data.name}</h1></a>
                </div>
            )
        }
    }
    return (
        <div className={`grid justify-center pb-14 pt-1  my-1 `}>
            <div className={`grid relative text-center`}>
                <img src={data.img} className={` ${members ? "rounded-full" : "rounded-xl"}
                        w-full h-auto aspect-square object-cover p-2`}/>
                {renderOverlay()}
            </div>

            <div className={`${members ? "text-center" : "text-start"} pt-2.5 px-2`}>
                {data.tracks && <p className={`font-light`}>{data.followers} Followers ● {data.tracks} Tracks</p>}
                <h3 className={` text-xl `}>{data.name}</h3>
                {data.user && <p>{data.user}</p>}
                {data.location && <p>{data.location}</p>}
            </div>

        </div>
    );
}

export default CustomSlide;