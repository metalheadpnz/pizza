import './scss/app.scss'
import {Header} from "./components/Header";
import {Categories} from "./components/Сategories";
import {Sort} from "./components/Sort";
import {PizzaBlock} from "./components/PizzaBlock";

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
                        <PizzaBlock title={'чизбургер пицца'}
                                    price={395}/>
                    </div>
                </div>
            </div>
        </div>
    )
}