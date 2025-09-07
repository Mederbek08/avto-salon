

import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <img src="/fit.png" alt="Fit " />
        </div>
        <div className={styles.cardInfo}>
            <h3>Honda Fit</h3>
            <p>Объем двигателя <b>1,2 л.с.</b></p>
            <p>Год <b>2015 г.</b></p>
            <p>Пробег <b>34 000 км</b></p>
            <p> <b>Под полную пошлину</b></p>
        </div>
        <div className={styles.cardInfo2}>
            <p>Привод <b>Задний</b></p>
            <p>КПП <b>Автомат</b></p>
        </div>
        <div className={styles.cardPrise}>
            <p>Стоимость во Владивостоке</p>
            <h3>630 000 ₽</h3>
            <button>В наличии</button>
        </div>

    </div>
  )
}

export default Card