import React, {useState} from 'react';
import {useSession} from "next-auth/react";
import {PlusIcon, DotsVerticalIcon} from "@heroicons/react/solid";
import {PauseIcon, PlayIcon} from "@heroicons/react/outline";
import PlayerOptions from "./PlayerOptions";
import SideBarSkeleton from "../SideBarSkeleton";
import Volume from "./Volume";
import SongRange from "./Slider/SongRange";

function MusicPlayer(props) {
    const {toggleQueueMenuCallBack} = props
    const {data: session, status} = useSession()
    const [playing, setPlaying] = useState(true)
    const [queueMenu, setQueueMenu] = useState(false)

    return (
        <div className="w-full max-h-24 bg-white dark:bg-dark300 sticky z-50 bottom-0">
            <SongRange/>
            <div
                className="grid  grid-cols-2 lg:grid-cols-3 justify-items-center text-xs font-semibold text-gray-500 px-2 md:px-4 py-2">
                <div className="justify-self-start flex space-x-5">
                    <div className={`flex items-center md:space-x-4`}>
                        <img
                            src="https://source.unsplash.com/300x300/?music"
                            alt=""
                            width="160"
                            height="160"
                            className="hidden md:inline w-12 h-12 lg:w-14 lg:h-14 rounded-lg "
                        />
                        <div className={`self-center `}>
                            <h3>
                                <a href={``}>
                                    Song Name
                                </a>
                            </h3>

                            <p className={`font-light`}>
                                <a href={``}>
                                    The Weekend
                                </a>
                                <span> ● 500 plays</span>
                            </p>
                        </div>

                    </div>

                    <div className={`lg:flex hidden `}>
                        <PlayerOptions/>
                    </div>
                </div>
                {/* Center */}
                <div className="flex justify-self-end lg:justify-self-center items-center space-x-5 py-2 px-3 lg:p-0">
                    <div className={`flex space-x-2 lg:hidden pr-3`}>
                        <PlayerOptions/>
                    </div>
                    <button className="focus:outline-none hidden lg:flex">
                        <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 512 512">
                            <path
                                d="M424.1 287c-15.13-15.12-40.1-4.426-40.1 16.97V352H336L153.6 108.8C147.6 100.8 138.1 96 128 96H32C14.31 96 0 110.3 0 128s14.31 32 32 32h80l182.4 243.2C300.4 411.3 309.9 416 320 416h63.97v47.94c0 21.39 25.86 32.12 40.99 17l79.1-79.98c9.387-9.387 9.387-24.59 0-33.97L424.1 287zM336 160h47.97v48.03c0 21.39 25.87 32.09 40.1 16.97l79.1-79.98c9.387-9.391 9.385-24.59-.0013-33.97l-79.1-79.98c-15.13-15.12-40.99-4.391-40.99 17V96H320c-10.06 0-19.56 4.75-25.59 12.81L254 162.7L293.1 216L336 160zM112 352H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c10.06 0 19.56-4.75 25.59-12.81l40.4-53.87L154 296L112 352z"/>
                        </svg>
                    </button>
                    <button className="focus:outline-none">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="19 20 9 12 19 4 19 20"></polygon>
                            <line x1="5" y1="19" x2="5" y2="5"></line>
                        </svg>
                    </button>
                    {playing ? (<button onClick={() => setPlaying(false)}
                                        className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-1 ring-primary focus:outline-none">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </button>
                    ) : (<button onClick={() => setPlaying(true)}
                                 className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-1 ring-primary focus:outline-none">
                        <PauseIcon className={`w-4 h-4`}/>
                    </button>)}
                    <button className="focus:outline-none">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 4 15 12 5 20 5 4"></polygon>
                            <line x1="19" y1="5" x2="19" y2="19"></line>
                        </svg>
                    </button>
                    <button className="focus:outline-none hidden lg:flex">
                        <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 512 512">
                            <path
                                d="M480 256c-17.67 0-32 14.31-32 32c0 52.94-43.06 96-96 96H192L192 344c0-9.469-5.578-18.06-14.23-21.94C169.1 318.3 159 319.8 151.9 326.2l-80 72C66.89 402.7 64 409.2 64 416s2.891 13.28 7.938 17.84l80 72C156.4 509.9 162.2 512 168 512c3.312 0 6.615-.6875 9.756-2.062C186.4 506.1 192 497.5 192 488L192 448h160c88.22 0 160-71.78 160-160C512 270.3 497.7 256 480 256zM160 128h159.1L320 168c0 9.469 5.578 18.06 14.23 21.94C337.4 191.3 340.7 192 343.1 192c5.812 0 11.57-2.125 16.07-6.156l80-72C445.1 109.3 448 102.8 448 95.1s-2.891-13.28-7.938-17.84l-80-72c-7.047-6.312-17.19-7.875-25.83-4.094C325.6 5.938 319.1 14.53 319.1 24L320 64H160C71.78 64 0 135.8 0 224c0 17.69 14.33 32 32 32s32-14.31 32-32C64 171.1 107.1 128 160 128z"/>
                        </svg>
                    </button>
                </div>
                <div className="justify-self-end justify-items-center w-fit hidden lg:flex">
                    <Volume className="flex w-32 self-center"/>
                    <div className="ms-4 flow-root lg:ms-6  bg-red self-center">
                        <button onClick={() => {
                            setQueueMenu(!queueMenu);
                            toggleQueueMenuCallBack(!queueMenu);
                        }} className=" -m-2 p-2 flex ">
                            <svg className=" h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"/>
                            </svg>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;