import Button from '../ui/Button/Button'
import styles from './FilterAuto.module.css'

const FilterAuto = () => {
  return (
    <div className={styles.filter}>
      {/* Чекбокстар */}
      <div className={styles.filter__top}>
        <label>
          <input type="checkbox" defaultChecked  /> Полная пошлина
        </label>
        <label>
          <input type="checkbox" defaultChecked  /> Распил или конструктор
        </label>
      </div>

      {/* Негизги форма */}
      <div className={styles.filter__body}>
        <div className={styles.field}>
          <p>Тип техники</p>
          <select>
            <option>Не выбрано</option>
            <option>Легковые</option>
            <option>Грузовые</option>
          </select>
        </div>

        <div className={styles.field}>
          <p>Производитель</p>
          <select>
            <option>Не выбрано</option>
            <option>Toyota</option>
            <option>Nissan</option>
          </select>
        </div>

        <div className={styles.field}>
          <p>Марка</p>
          <select>
            <option>Не выбрано</option>
            <option>Camry</option>
            <option>Crown</option>
          </select>
        </div>

        <div className={styles.field}>
          <p>Год выпуска</p>
          <div className={styles.yearBlock}>
            <select>
              <option>от</option>
              <option>2000</option>
              <option>2005</option>
              <option>2010</option>
            </select>
            <select>
              <option>до</option>
              <option>2015</option>
              <option>2020</option>
              <option>2025</option>
            </select>
            <Button text="Найти" />
          </div>
        </div>
      </div>

      {/* Төмөнкү бөлүк */}
      <div className={styles.filter__bottom}>
        <p>
          Автомобилей в наличии: <span>256</span>
        </p>
        <select className={styles.advSelect}>
          <option>Расширенный поиск </option>
          <option>По цене</option>
          <option>По объему двигателя </option>
        </select>
      </div>
    </div>
  )
}

export default FilterAuto
