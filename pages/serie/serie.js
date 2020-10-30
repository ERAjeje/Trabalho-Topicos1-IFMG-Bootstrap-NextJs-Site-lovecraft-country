import React from 'react';
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Series() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lovecraft Country</title>
                <link rel="icon" href="/public/mau-tchulhu.ico" />
                <link
                    rel="preload"
                    href="/public/fonts/LovecraftCountry-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/public/fonts/PTSansNarrow-bold.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/public/fonts/AndroclesOpti-Heavy.otf"
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