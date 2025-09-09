import Layout from "./layout/Layout";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import FilterAuto from "./components/FilterAuto/FilterAuto";
import AutoCards from "./components/AutoCards/AutoCards";
import Card from "./components/Card/Card";
import Reviews from "./components/Reviews/Reviews";

const cars = [
  {
    carName: "Honda Fit",
    img: "fit.png",
    price: 680000,
    v: "1.2 л.с.",
    year: "2015 г.",
    km: "34 000 км",
    delivery: "Под полную пошлину",
    drive: "Задний",
    transmission: "Автомат",
    status: "В наличии",
    priceText: "Стоимость во Владивостоке",
  },
  {
    carName: "BMW X5",
    img: "bmw.png",
    price: 580000,
    v: "2.30 л.с.",
    year: "2005 г.",
    km: "110 000 км",
    delivery: "Под полную пошлину",
    drive: "Полный",
    transmission: "Автомат",
    status: "Под заказ",
    priceText: "Стоимость во Японии",
  },
  {
    carName: "Toyota Prius",
    img: "tayota.png",
    price: 710000,
    v: "1.9 л.с.",
    year: "2009 г.",
    km: "57 000 км",
    delivery: "Под полную пошлину",
    drive: "Передний",
    transmission: "Автомат",
    status: "В наличии",
    priceText: "Стоимость во Японии",
  },
];

const App = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Banner />
        <FilterAuto />
        <AutoCards />
        <div>
          {cars.map((car) => {
            return <Card car={car} key={car.carName} />
          })}
        </div>
        <Reviews />
      </Layout>

    </div>
  );
};

export default App;

// react-router
// axios
// tailwind css
// react-icons
// 200 + 1080px
