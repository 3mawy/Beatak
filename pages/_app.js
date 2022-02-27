import '../styles/globals.css'
import Layout from '../components/Layout'
import {ThemeProvider} from 'next-themes';
import {appWithTranslation} from 'next-i18next';
import {SessionProvider, useSession} from 'next-auth/react'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

function MyApp({Component, pageProps}) {
    return (
        <SessionProvider session={pageProps.session} refetchInterval={0}>
            <ThemeProvider attribute="class">

                {Component.auth ? (
                    <Auth>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </Auth>
                ) : (
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                )}
            </ThemeProvider>

        </SessionProvider>
    )
}

function Auth({children}) {
    const router = useRouter()
    const {data: session, status, token} = useSession()
    const isUser = !!session?.user
    useEffect(() => {
        if (status === 'loading') return // Do nothing while loading
        if (!isUser) router.push('/login') //Redirect to login
    }, [isUser, status])

    if (isUser) {
        return children
    }
    // Session is being fetched, or no user.
    // If no user, useEffect() will redirect.
    return <div>Loading...</div>
}

export default appWithTranslation(MyApp);