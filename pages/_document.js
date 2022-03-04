import React from 'react';
import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';
import {useTranslation} from 'react-i18next';
import {useRouter} from "next/router";

export default class MyDocument extends Document {

    render() {

        return (

            <Html lang="ar">
                <Head>
                    <meta name="description" content="Beatak The First Arabic platform for Hip-Hop"/>
                    <link rel="icon" href="/favicon.svg"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

