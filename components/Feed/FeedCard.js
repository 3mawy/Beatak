import React from 'react';
import Image from "next/image";
import FeedPost from "./FeedPost";
import {useRouter} from "next/router";

function FeedCard(props) {
    const {locale} = useRouter()

    return (
        <div dir={locale === 'ar' ? 'rtl' : 'ltr'}
            className={`flex grid grid-cols-1 bg-transparent my-2 text-green-500 font-bold text-center lg:px-2  `}>
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