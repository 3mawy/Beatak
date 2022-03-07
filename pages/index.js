import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import HomeSwiper from "../components/Swiper/HomeSwiper";
import {genres, members, playlists, tracks} from "../components/Swiper/testData";
import HeroSection from "../components/HeroSection/HeroSection";


function Home() {

    return (
        <div>
            <Head>
                <title>Beatak</title>
                <meta name="description" content="Beatak The First Arabic platform for Hip-Hop"/>
                <link rel="icon" href="/favicon.svg"/>
            </Head>

            <main className={``}>
                <div className="">
                    <HeroSection/>
                    <div className={`xl:container mx-auto md:px-4`}>
                        <HomeSwiper heading={`Recommended Playlists`} style={'playlists'} data={playlists}/>
                        <HomeSwiper heading={`Trending tracks`} style={'tracks'} data={tracks}/>
                        <HomeSwiper heading={`Recommended Members`} style={'members'} data={members}/>
                        <HomeSwiper heading={`Popular Genres`} style={'genres'} data={genres}/>
                    </div>

                </div>
            </main>


        </div>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'header', 'searchBarSelect']),
    },
})
export default Home