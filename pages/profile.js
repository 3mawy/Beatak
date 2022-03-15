import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Register from "../components/Register/Register";

function Profile(props) {
    return (
        <Register/>
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'header', 'searchBarSelect']),
    },
})
export default Profile;