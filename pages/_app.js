import '../styles/globals.css'
import Layout from '../components/Layout'
import {ThemeProvider} from 'next-themes';
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";
import {appWithTranslation} from 'next-i18next';

function MyApp({Component, pageProps}) {
    return (
        <div>
            <ThemeProvider attribute="class">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </div>

    )
}

export default appWithTranslation(MyApp);