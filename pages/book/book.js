import React from 'react';
import Header from "../components/header/Header";
import styles from "./book.module.css";
import Head from "next/head";
import Footer from "../components/footer/Footer";
import Parallax from "../components/parallax/Parallax"

function Book() {
    const image = "/assets/images/background_archan_map.jpg";
    const photo = "/assets/images/OIP.jpg"
    return (
        <div className={styles.container}>
            <Head>
                <title>Lovecraft Country</title>
                <link rel="icon" href="/mau-tchulhu.ico" />
                <link
                    rel="preload"
                    href="/fonts/PTSansNarrow-bold/PTSansNarrow-bold.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/AndroclesOpti-Heavy/AndroclesOpti-Heavy.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>

            <main className={styles.main}>
                <Header />
                <div className={styles.divBackground}>
                    <Parallax img={image} 
                    text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.' 
                    photo={photo} 
                    alt='Imagem retirada da série mostrando o mapa de Arthan'
                    title='O Livro' 
                    strength='300'
                    />
                </div>
                <div className={styles.mainDiv}>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-sm-6 col-md-6 col-lg-8'>
                                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-4'>
                                <img className='img-fluid' src='/assets/images/OIP.jpg' alt="Imagem retirada da série mostrando o mapa de Arthan" width={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.divBackground}>
                    <Parallax img={image} text='' photo='' />
                </div>
                <Footer className={styles.footerMain} />
            </main>
        </div>
    );
}

export default Book;