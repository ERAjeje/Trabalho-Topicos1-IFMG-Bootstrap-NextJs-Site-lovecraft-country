import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeCarousel from './components/carousel/Carousel';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lovecraft Country</title>
                <link rel="icon" href="/mau-tchulhu.ico" />
                <link
                    rel="preload"
                    href="/fonts/LovecraftCountry-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/PTSansNarrow-bold.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/AndroclesOpti-Heavy.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>

            <main className={styles.main}>
                <Header />

                <div className={styles.divTitle}>
                    <span className={styles.spanTitle}>Bem-vindo ao</span> <img className={styles.logoTitle} src='/assets/images/logo.png'/>
                </div>
                <HomeCarousel />
            </main>
            <Footer className={styles.footerMain}/>
        </div>
    )
}
