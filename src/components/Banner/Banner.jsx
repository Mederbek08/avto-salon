
import styles from './Banner.module.css'
import BannerImg from "../../assets/banner.png"
import React from 'react'



const Banner = () => {
  return (
    <div 
    style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "316px"
    }}
    className={styles.banner}>
        <h1>Доставим любую технику из Японии за 3 недели</h1>
    </div>
  )
}

export default Banner