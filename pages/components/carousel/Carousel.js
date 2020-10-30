import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';
import css from './carousel.module.css'

const items = [
    {
        src: 'https://www.youtube.com/watch?v=a7XlZJ4F3e0',
        header: '1',
        key: '1'
    },
    {
        src: 'https://i.ibb.co/bgvWBFV/netflix-clone-tela.png',
        header: '',
        key: '2'
    },
    {
        src: 'https://i.ibb.co/SPFNf8Y/netflix-clone-tela2.png',
        header: '',
        key: '3'
    },
];

const HomeCarousel = () => <UncontrolledCarousel items={items} className={css.carousel}/>;

export default HomeCarousel;