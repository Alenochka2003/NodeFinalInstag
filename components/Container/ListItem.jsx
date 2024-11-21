import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Container.module.css';

function ListItem({ icon, textKey, path }) {
    const { t } = useTranslation();

    return (
        <NavLink to={path} className={({ isActive }) => 
        isActive ? `${styles.container_all_img} ${styles.active}` : styles.container_all_img }>
            <div className={styles.container_all_img_img}>
                <img src={icon} alt="icon" />
            </div>
            <div className={styles.container_all_img_text}>
                <p>{t(textKey)}</p>
            </div>
        </NavLink>
    );
}

export default ListItem;    