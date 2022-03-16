import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import RegisterForm from "../components/Register/RegisterForm";
import {useTranslation} from "next-i18next";

function Register(props) {

    return (
        <div className={`min-h-screen`}>
            <RegisterForm/>

        </div>
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'header', 'searchBarSelect', 'register']),
    },
})
export default Register;