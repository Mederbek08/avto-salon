import styles from './Reviews.module.css'
import { IoIosStar } from "react-icons/io";

const videos = [1, 2, 3, 4]

const Reviews = () => {

  return (
    <div>
      <h2>Отзывы</h2>
      <div className={styles.cards}>
        {videos.map( v => {
          return <div className={styles.card}>
            <div className={styles.cardVideo}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KlKnXdzcB84?si=ovKnfvCd1ODAHeN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div>
            <div className={styles.cardBody}>
              <IoIosStar color='#FFC85F' />
              <h4>Генадий Сергеевич</h4>
              <p>Toyota Allion </p>
            </div>
          </div>
        } )}

      </div>
    </div>
  )
}

export default Reviews