import style from './Catalog.module.css'
import { Card } from '../Cards/Card'

export function Catalog() {
    return (
        <>
            <div className="container">
            <div className={style.catalog_grid}>
            <Card img="./src/assets/tovar.png" name='Освежитель воздуха, со вкусом лайма' price="70" />
            <Card img="./src/assets/tovar1.jpeg" name='Освежитель воздуха, в виде шапочки' price="210" />
            <Card img="./src/assets/tovar2.jpeg" name='Освежитель воздуха, в виде женских губ' price="110" />
            <Card img="./src/assets/tovar3.jpg" name='Освежитель воздуха, со вкусом кофе' price="130" />
            <Card img="./src/assets/tovar4.jpg" name='Освежитель воздуха, в виде Тейлор Мун' price="100" />
            <Card img="./src/assets/tovar5.jpeg" name='Освежитель воздуха, парфимированные' price="240" />
            </div>
            </div>
        </>
    )
}