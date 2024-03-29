import React from 'react';
import Image from "next/image";
import FeedPost from "./FeedPost";
import {useRouter} from "next/router";

function FeedCard(props) {
    const {locale} = useRouter()

    return (
        <div dir={locale === 'ar' ? 'rtl' : 'ltr'}
            className={`flex grid grid-cols-1 bg-transparent my-2 text-green-500 font-bold lg:px-2 max-w-lg mx-auto md:max-w-full  `}>
            <div className={`bg-gray50 dark:bg-dark300 h-10 w-full flex grid mb-2 px-6`}>
                <h1 className={`self-center text-primary`}>Announcement</h1>
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