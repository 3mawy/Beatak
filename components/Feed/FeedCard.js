import React from 'react';
import Image from "next/image";
import FeedPost from "./FeedPost";

function FeedCard(props) {
    return (
        <div
            className={`flex grid grid-cols-1 bg-transparent my-2 text-green-500 font-bold text-center px-2  `}>
            <div className={`bg-gray100 dark:bg-dark300 h-10 w-full flex grid mb-2`}>
                <h1 className={`self-center `}>Announcement</h1>
            </div>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
        </div>
    );
}

export default FeedCard;