import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import FeedCard from "../components/FeedCard";

function Feed(props) {
    return (
        <div className={`xl:container grid mx-auto px-4`}>

            <div className={`grid md:space-x-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-8 pt-11`}>
                <div className="hidden md:block md:col-span-1 lg:col-span-2"><FeedCard data={`Tags`}/></div>
                <div className="col-start-1  md:col-span-2 lg:col-span-4"><FeedCard data={`Feed`}/></div>
                <div className="col-span-2 hidden lg:block"><FeedCard data={`Suggested`}/></div>
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