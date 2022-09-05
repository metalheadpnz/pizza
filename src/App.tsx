import './scss/app.scss'
import {Header} from "./components/Header";
import {Categories} from "./components/Сategories";
import {Sort} from "./components/Sort";
import {PizzaBlock} from "./components/PizzaBlock";
import {useEffect, useState} from "react";

export type pizzaType = {
    category: number
    id: number
    imageUrl: string
    price: number
    rating: number
    sizes: number[]
    title: string
    types: Array<0 | 1>
}

export const App = () => {
    const [items, setItems] = useState<pizzaType[]>([])

    useEffect(() => {
        fetch('https://6316576e82797be77fe3b2e6.mockapi.io/items')
            .then(res => res.json())
            .then(json => setItems(json))
    }, [])

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
                        {
                            items.map(item => (
                                    <PizzaBlock
                                        key={item.id}
                                        {...item}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}