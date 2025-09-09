

import styles from './AutoCards.module.css'

const AutoCards = () => {
  return (
    <div className={styles.wrap}>
        <div className={styles.popular}>
            <h2>Популярные автомобили</h2>
            <div>
                <div><input type="radio" name='type'/> <span>Любые</span></div>
                <div><input type="radio" name='type'/> <span>В наличии</span></div>
                <div><input type="radio" name='type'/> <span>Под заказ</span></div>
            </div>
        </div>
    </div>        
  )
}

export default AutoCards