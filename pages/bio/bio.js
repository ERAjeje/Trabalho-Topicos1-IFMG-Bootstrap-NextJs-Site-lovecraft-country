import React from 'react';

import Head from "next/head";
import styles from '../../styles/Home.module.css';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function Bio() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lovecraft Country</title>
                <link rel="icon" href="//mau-tchulhu.ico" />
                <link
                    rel="preload"
                    href="//fonts/LovecraftCountry-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="//fonts/PTSansNarrow-bold.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="//fonts/AndroclesOpti-Heavy.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>

            <main className={styles.main}>
                <Header />



            </main>
            <Footer className={styles.footerMain}/>
        </div>
    );
}