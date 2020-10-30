import React from 'react';
import css from './footer.module.css'

export default function Footer() {

    return (
        <div className={css.footerMain}>
            <div className={css.divFooterH6}>
                <h6>Uma série <a href=''><img className={css.hboLogo} src='/assets/images/HBO_logo_black.png' /></a> </h6>
            </div>
            <div className={css.divName}><span>Site produzido por Edson Ajeje</span></div>
        </div>
    );
}