import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function Feed(props) {
    return (
        <div ></div>
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'header', 'searchBarSelect']),
    },
})
export default Feed;