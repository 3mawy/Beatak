import React from 'react';
import Image from "next/image";

function FeedPost(props) {
    return (
        <div className={`bg-gray100 dark:bg-dark300 ps-3 md:ps-6 py-3 md:py-5 w-full flex grid mb-2 space-y-5`}>
            <div className={`flex items-center space-s-2`}>
                <Image
                    src="https://picsum.photos/300/300/?music"
                    alt=""
                    width={40}
                    height={40}
                    className={'rounded-full ms-2'}
                />

                <div className={`self-center text-sm flex truncate`}>
                    <h3 className={` inline`}>
                        <a href={``}>
                            Artist Name
                        </a>

                    </h3>
                    <p className={` mx-1 inline dark:text-gray300`} dir={`ltr`}>
                        @artist
                    </p>
                    <span className={`dark:text-gray300`}> • 2d</span>
                </div>

            </div>
            <div className={`flex items-center space-s-3`}>
                <div className={`w-20 h-20 md:h-auto md:w-auto`}>
                    <Image
                        src="https://picsum.photos/300/300/?music"
                        alt=""
                        width={150}
                        height={150}
                        className={`rounded-sm`}
                    />

                </div>

                <div className={`self-start flex`}>
                    <button
                            className="self-center rounded-full w-6 h-6 flex items-center justify-center pl-0.5 ring-1 ring-primary focus:outline-none">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </button>
                    <h3 className={`sm:text-xl inline self-center ms-2  text-sm truncate`}>
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