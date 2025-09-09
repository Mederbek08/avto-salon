import styles from './Card.module.css'

const Card = (props) => {
    const { car } = props
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <img src={`/${car.img}`} alt="Fit " />
        </div>
        <div className={styles.cardInfo}>
            <h3>{car.carName}</h3>
            <p>Объем двигателя <b>{car.v}</b></p>
            <p>Год <b>{car.year}</b></p>
            <p>Пробег <b>{car.km}</b></p>
            <p> <b>{car.delivery}</b></p>
        </div>
        <div className={styles.cardInfo2}>
            <p>Привод <b>{car.drive}</b></p>
            <p>КПП <b>{car.transmission}</b></p>
        </div>
        <div className={styles.cardPrise}>
            <p>{car.priceText}</p>
            <h3>{car.price} ₽</h3>
            <button>{car.status}</button>
        </div>


    </div>
  )
}

export default Card