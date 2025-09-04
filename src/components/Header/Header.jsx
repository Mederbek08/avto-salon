import React from 'react'
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
        <p>Автомобили из японии с доставокй по всей России</p>
        <div className={styles.header__phone}>
            <h3 className={styles.number}>8 800 250-78-07</h3>
            <p>Бесплатный звонок по всей России</p>
        </div>
    </div>
  )
}

export default Header