import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import FeedCard from "../components/Feed/FeedCard";
import FeedSearchesCard from "../components/Feed/FeedSearchesCard";
import FeedFollowCard from "../components/Feed/FeedFollowCard";

function Feed(props) {
    return (
        <div className={`xl:container grid mx-auto px-4 `}>
            <h1 className={`text-3xl py-5`}>Your Feed</h1>

                <div className={`grid flex  `}  dir={`ltr`}>
                    <div className={`grid self-center flex md:space-s-3 grid-flow-col md:container md:mx-auto`}>
                        <div className=" hidden md:grid md:col-span-1 lg:col-span-2 "><FeedSearchesCard data={`Tags`}/></div>
                        <div className="sm:col-span-full md:col-span-12 lg:col-span-5 xl:col-span-8 "><FeedCard data={`Feed`}/></div>
                        <div className="xl:col-span-2 hidden xl:block"><FeedFollowCard data={`Suggested`}/></div>
                    </div>

                </div>

        </div>

    );
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'header', 'searchBarSelect']),
    },
})
export default Feed;