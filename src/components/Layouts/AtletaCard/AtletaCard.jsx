import React from 'react';
import { motion } from 'framer-motion';
import styles from './AtletaCard.module.css';

const AtletaCard = ({ atleta, isSelected, onClick }) => {
    return (
        <motion.div
            className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200, damping: 5, duration: 0.3 }}
        >
            <img src={atleta.img} alt={atleta.nombre} className={styles.cardImage} />
        </motion.div>
    );
};

export default AtletaCard;
