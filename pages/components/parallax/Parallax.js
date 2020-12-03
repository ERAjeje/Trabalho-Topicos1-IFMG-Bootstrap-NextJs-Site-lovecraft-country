import React from 'react'
import { Parallax, Background } from 'react-parallax';
import Conteudo from '../conteudo/Conteudo'

export default function ParallaxComponent(props) {
    return (
        <div>
            <Parallax
                blur={3}
                bgImage={props.img}
                bgImageAlt="Arthan Map"
                strength={props.strength}
            >
                <div className='col-10 container-fluid' style={{ height: '743px' }} >
                    <Conteudo title={props.title} image={props.photo} alt={props.alt} text={props.text} />
                </div>
            </Parallax>
        </div>
    )
}
