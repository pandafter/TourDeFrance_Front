// src/data/atletas.js
import img1 from '../assets/Tadej.jpg'
import img2 from '../assets/Primoz.jpg'
import img3 from '../assets/Wout.jpg'
import img4 from '../assets/Cadel.jpg'
import img5 from '../assets/Nairo.jpg'

import fondo1 from '../assets/fondos/Tadej_fondo.jpg'
import fondo2 from '../assets/fondos/Primoz_fondo.jpg'
import fondo3 from '../assets/fondos/Wout_fondo.jpg'
import fondo4 from '../assets/fondos/Cadel_fondo.jpg'
import fondo5 from '../assets/fondos/Nairo_fondo.jpg'

const atletas = [
    {
        id: 1,
        img: img1,
        nombre: "Tadej Pogačar",
        descripcion: "Ciclista esloveno, ganador del Tour de Francia en 2020 y 2021.",
        fondo: fondo1
    },
    {
        id: 2,
        img: img2,
        nombre: "Primož Roglič",
        descripcion: "Ciclista esloveno, conocido por sus victorias en la Vuelta a España y sus fuertes actuaciones en el Tour.",
        fondo: fondo2
    },
    {
        id: 3,
        img: img3,
        nombre: "Wout van Aert",
        descripcion: "Ciclista belga, destacado tanto en etapas de montaña como en sprints.",
        fondo: fondo3
    },
    {
        id: 4,
        img: img4,
        nombre: "Cadel Evans",
        descripcion: "Ciclista australiano, ganador del Tour de Francia en 2011.",
        fondo: fondo4
    },
    {
        id: 5,
        img: img5,
        nombre: "Nairo Quintana",
        descripcion: "Ciclista colombiano, ganador del Giro de Italia en 2014 y de la Vuelta a España en 2016.",
        fondo: fondo5
    }
];

export default atletas;
