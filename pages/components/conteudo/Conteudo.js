import React from 'react'
import styles from '../../book/book.module.css'

export default function Conteudo(props) {
    const title = props.title != null ? props.title : null;
    const image = props.image != null ? props.image : null;
    const alt = props.alt;
    const text = props.text;
    return (
        <div className='col pt-5 my-5'>
        <h3 className={styles.title} >{title}</h3>
            <div className='row'>
                <div className={`col-md-6 col-lg-4 pt-5 my-2`}>
                    <img className={`img-responsive d-xs-none d-md-block`} src={image} alt={alt} width={250} height='auto' />
                </div>
                <div className='col-md-6 col-lg-8 pt-5 my-2'>
                    {text}
                </div>
            </div>
        </div>
    )
}
