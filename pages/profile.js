import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function Profile(props) {
    return (
        <div>profile</div>
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'header', 'searchBarSelect']),
    },
})
export default Profile;