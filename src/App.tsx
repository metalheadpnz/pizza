import './scss/app.scss'
import {Header} from "./components/Header";
import {Categories} from "./components/Сategories";
import {Sort} from "./components/Sort";
import {PizzaBlock} from "./components/PizzaBlock";
import pizzas from './assets/pizzas.json'

export const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}