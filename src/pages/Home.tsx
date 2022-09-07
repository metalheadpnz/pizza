import React, {useEffect, useState} from 'react';
import { Categories} from "../components/Сategories";
import {Sort} from "../components/Sort";
import {PizzaSkeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {pizzaType} from "../App";

const sortTypes = ['rating', 'price', 'title']

export const Home = () => {
    const [items, setItems] = useState<pizzaType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const [sortBy, setSortBy] = useState(0)
    const [category, setCategory] = useState<number>(0)

    useEffect(() => {
        const sortParam = `sortBy=${sortTypes[sortBy]}`
        const categoryParam = category? `&category=${category}`: ''
        fetch(`https://6316576e82797be77fe3b2e6.mockapi.io/items?${sortParam}${categoryParam}`)
            .then(res => res.json())
            .then(json => {
                setItems(json)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [sortBy,category])

    return (
        <div className="container">
            <div className="content__top">
                <Categories setCategory={setCategory}/>
                <Sort setSortBy={setSortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? <PizzaSkeleton times={6}/>
                    : items.map(item => <PizzaBlock key={item.id}{...item}/>)
                }
            </div>

        </div>
    );
};