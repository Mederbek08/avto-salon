import styles from './BuyCard.module.css'
import buyimg from '../../assets/buy.png'
import BuyCard from './BuyCard'

const data = [
    {
        imgSrc: "/doc1.png",
        title: "Оставляете  \n заявку",
        description: "Вы оставляете заявку на \n сайте,  либо связываетесь с нами удобным для вас способом."
    },
    {
        imgSrc: "/doc2.png",
        title: "Заключаем \n договор",
        description: "Заключаем договор, \n Вы вносите гарантийный депозит."
    },
    {
        imgSrc: "/doc3.png",
        title: "Подбор и \n покупка авто",
        description: "Вам предлагаются подходящие варианты с аукционов, Вы принимаете решение, автомобиль выкупается."
    },
    {
        imgSrc: "/doc4.png",
        title: "Доставка в РФ и оформление",
        description: "Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где проходит таможенное оформление."
    },
    {
        imgSrc: "/doc5.png",
        title: "Доставка до вашего города",
        description: "Мы доставляем авто в любой регион России выбранным Вами способом, либо Вы сами забираете его во Владивостоке."
    }
]


const Buy = () => {
    return (
        <div className={styles.buy}>
            <div className={styles.image}>
                <img src={buyimg} alt="" />
            </div>
            <div className={styles.info}>
                <h2>Как происходит покупка</h2>
                <div className={styles.cards}>
                    {data.map(item => <BuyCard
                        imgSrc={item.imgSrc}
                        title={item.title}
                        description={item.description} />)}
                    <div className={styles.lastCard}>
                        <h3>Оставить заявку</h3>
                        <img src="/pochta.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy