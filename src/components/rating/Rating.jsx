import { useState } from "react";
import styles from "./Rating.module.css";

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  const ratingList = [
    {
      label: "Плохо",
      value: 1,
      image:
        "https://www.clipartmax.com/png/middle/448-4489878_1-out-of-5-stars-1-star-rating-png.png",
    },
    {
      label: "Приемлемо",
      value: 2,
      image:
        "https://sun9-28.userapi.com/impf/c855436/v855436801/d69a5/8TdLk-8oMHA.jpg?size=1161x913&quality=96&sign=fc8537d8437b1421872208ca5e29fc8a&c_uniq_tag=3sdCGa_KUxOtSRVS5RNDFGr77OoKVRi8MwqGagANG1E&type=album",
    },
    {
      label: "Хорошо",
      value: 3,
      image:
        "https://banner2.kisspng.com/20181128/uct/kisspng-galatasaray-s-k-dream-league-soccer-uefa-champion-yldz-clipart-ourclipart-5bff31fccd2c99.8288298815434511328404.jpg",
    },
  ];

  return (
    <div className={styles.RatingContainer}>
      <div className={styles.RatingImage}>
        <img
          src={ratingList[ratingValue].image}
          alt={ratingList[ratingValue].label}
        />
      </div>
      <div className={styles.RatingButtons}>
        {ratingList.map((rating, index) => (
          <button key={index} onClick={() => setRatingValue(index)}>
            {rating.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Rating;
