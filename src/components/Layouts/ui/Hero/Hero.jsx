import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Hero.module.css';
import Logo from '../../../../assets/5Jsl-vx1_400x400.png';
import atletas from '../../../../constants/constant';
import AtletaCard from '../../AtletaCard/AtletaCard';

export const Hero = () => {
    const [selectedAtleta, setSelectedAtleta] = useState(null);
    const [athletesOrder, setAthletesOrder] = useState([]);
    const controls = useAnimation();

    useEffect(() => {
        // Ensure Primož Roglič is selected by default
        const primož = atletas.find(a => a.nombre === 'Primož Roglič');
        const others = atletas.filter(a => a.nombre !== 'Primož Roglič');
        if (primož) {
            setSelectedAtleta(primož);
            setAthletesOrder([primož, ...others]);
        } else {
            setAthletesOrder(others);
        }
    }, []);

    useEffect(() => {
        // Trigger animation when the component is in view
        const handleScroll = () => {
            const element = document.querySelector(`.${styles.heroContainer2}`);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    controls.start({ opacity: 1 });
                } else {
                    controls.start({ opacity: 0 });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger on initial load

        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    const handleAtletaClick = (atleta) => {
        if (selectedAtleta && selectedAtleta.id === atleta.id) return; // Prevent reselecting the same athlete
        const newOrder = athletesOrder.filter(a => a.id !== atleta.id);
        newOrder.unshift(atleta);
        setAthletesOrder(newOrder);
        setSelectedAtleta(atleta);
    };

    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.heroDecoration}>
                    <div className={styles.heroWhiteCircle}></div>
                    <div className={styles.heroBackCircle}></div>
                    <div className={styles.heroBackCircle2}></div>
                </div>
                <div className={styles.imgLogoContainer}>
                    <img alt='logo' src={Logo} className={styles.imgLogo} />
                </div>
                <div className={styles.Textos}>
                    <label>Última carrera:</label>
                    <label>Noticias importantes:</label>
                </div>
                <div className={styles.cuadrosContenido}>
                    <div className={styles.cuadro1}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/P_m1Rz0cCe0" // Correct embed URL
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className={styles.cuadro2}>
                    <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/35KMkk1kBtA" // Correct embed URL
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <motion.div
                className={styles.heroContainer2}
                animate={controls}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: 'easeInOut' }} // Shorten duration for faster transition
            >
                {selectedAtleta && (
                    <div
                        className={styles.backgroundImage}
                        style={{
                            backgroundImage: `url(${selectedAtleta.fondo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.5, // Reduce opacity
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 0
                        }}
                    />
                )}
                <div className={styles.atletaDescription}>
                    <span>NUESTROS ATLETAS:</span>
                    {selectedAtleta && (
                        <div className={styles.selectedAtletaDetails}>
                            <h3>{selectedAtleta.nombre}</h3>
                            <p>{selectedAtleta.descripcion}</p>
                        </div>
                    )}
                </div>
                <div className={styles.carouselContainer}>
                    <div className={styles.carouselContent}>
                        {athletesOrder.map((atleta) => (
                            <motion.div
                                key={atleta.id}
                                className={styles.atletaCardContainer}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 25 }}
                            >
                                <AtletaCard
                                    atleta={atleta}
                                    isSelected={atleta.id === selectedAtleta?.id}
                                    onClick={() => handleAtletaClick(atleta)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Hero;
