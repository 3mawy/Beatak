import React from 'react';
import Image from "next/image";

function FeedPost(props) {
    return (
        <div className={`bg-gray100 dark:bg-dark300 px-6 py-5 w-full flex grid mb-2 space-y-5`}>
            <div className={`flex items-center md:space-s-2`}>
                <Image
                    src="https://picsum.photos/300/300/?music"
                    alt=""
                    width={40}
                    height={40}
                    className={'rounded-full'}
                />

                <div className={`self-center flex `}>
                    <h3 className={`text-sm inline`}>
                        <a href={``}>
                            Artist Name
                        </a>
                        <p className={` ms-1 inline dark:text-gray300`}>
                            @artist
                        </p>
                        <span className={`dark:text-gray300`}> • 2d</span>
                    </h3>

                </div>

            </div>
            <div className={`flex items-center space-s-4`}>
                <Image
                    src="https://picsum.photos/300/300/?music"
                    alt=""
                    width={150}
                    height={150}
                    className={`rounded-sm`}
                />

                <div className={`self-start flex`}>
                    <button
                            className=" self-center rounded-full w-6 h-6 flex items-center justify-center pl-0.5 ring-1 ring-primary focus:outline-none">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </button>
                    <h3 className={`text-xl inline ms-2 `}>
                        <a href={``}>
                            Track Name
                        </a>
                    </h3>
                </div>

            </div>
        </div>

    );
}

export default FeedPost;