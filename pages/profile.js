import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import RegisterForm from "../components/Register/RegisterForm";

function Profile(props) {
    return (
        <RegisterForm/>
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'header', 'searchBarSelect']),
    },
})
export default Profile;