import React, {useState, useEffect} from 'react';

import css from './carousel.module.css'

const items = [
   'Ambientada no universo de HP Lovecraft, a série mostra a jornada de Áticus descobrindo que os verdadeiros horrores a enfrentar não estão no sobrenatural.',
   'Cthulhu... Shoggoths... Kumiho... Nenhum horror se compara ao verdadeiro horror da humanidade.',
   'Utilizando de fatos históricos reais dos EUA, a showrunner Misha Green apresenta o verdadeiro monstro da humanidade.',
];

let index = 0;

export default function HomeCarousel (){

    const [frase, setFrase] = useState('');
    
    useEffect(() => {
        const interval = setInterval(() => {
            let aux = index
            setFrase(items[index % 3]);
            index = ++aux
        }, 10000)
        return () => {
            clearInterval(interval);
        }
    }, [frase])
    return(
        <div className={css.divCarousel}>
            <p>{frase}</p>
        </div>
    );
}