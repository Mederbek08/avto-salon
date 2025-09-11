import { useState } from "react";
import styles from './Reviews.module.css'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const reviews = [
  {
    id: 1,
    name: "Геннадий Сергеевич",
    car: "Toyota Allion",
    video: "https://www.youtube.com/embed/KlKnXdzcB84",
    poster: "/public/nomerone.png",
    rating: 5
  },
  {
    id: 2,
    name: "Ольга Архипова",
    car: "Toyota Allion",
    video: "https://www.youtube.com/embed/KlKnXdzcB84",
    poster: "/public/nomertwo.png",
    rating: 4
  },
  {
    id: 3,
    name: "Николай Евгеньевич",
    car: "Toyota Allion",
    video: "https://www.youtube.com/embed/KlKnXdzcB84",
    poster: "/public/nomerthree.png",
    rating: 5
  },
  {
    id: 4,
    name: "Роман Юрьевич",
    car: "Toyota Allion",
    video: "https://www.youtube.com/embed/KlKnXdzcB84",
    poster: "/public/nomerfour.png",
    rating: 5
  },
];

const ReviewCard = ({ name, car, video, poster, rating }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardVideo}>
        {!isPlaying ? (
          <div className={styles.posterWrapper} onClick={() => setIsPlaying(true)}>
            <img src={poster} alt={name} className={styles.poster} />

          </div>
        ) : (
          <iframe
            src={`${video}?autoplay=1`}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) =>
            i < rating ? (
              <IoIosStar key={i} color="#FFC85F" size={18} />
            ) : (
              <IoIosStarOutline key={i} color="rgba(233, 233, 233, 1)" size={18} />
            )
          )}
        </div>
        <h4>{name}</h4>
        <p>{car}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отзывы</h2>
      <div className={styles.cards}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      <div className={styles.button}>
        <button>Еще отзывы</button>
      </div>
    </div>
  );
};

export default Reviews;