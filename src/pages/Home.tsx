import React, {useContext, useEffect, useState} from 'react';
import {Categories} from "../components/Сategories";
import {Sort} from "../components/Sort";
import {PizzaSkeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {pizzaType, SearchContext} from "../App";
import {Pagination} from "../components/Pagination/Pagination";

const sortTypes = ['rating', 'price', 'title']

type PropsType = {

}

export const Home: React.FC<PropsType> = () => {
    const [items, setItems] = useState<pizzaType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPAge] = useState(1)
    const [sortBy, setSortBy] = useState(0)
    const [category, setCategory] = useState<number>(0)
    const {searchValue} = useContext(SearchContext)

    useEffect(() => {
        const sortParam = `&sortBy=${sortTypes[sortBy]}`
        const categoryParam = category ? `&category=${category}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''
        setIsLoading(true)
        fetch(`https://6316576e82797be77fe3b2e6.mockapi.io/items?page=${currentPage}&limit=4${sortParam}${categoryParam}${search}`)
            .then(res => res.json())
            .then(json => {
                setItems(json)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [sortBy, category, searchValue,currentPage])


    const pizzas = items.filter(pizza => pizza.title.toLowerCase().includes(searchValue.toLowerCase().trim()))

    return (
        <div className="container">
            <div className="content__top">
                <Categories category={category}
                            setCategory={setCategory}/>
                <Sort sortBy={sortBy}
                      setSortBy={setSortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? <PizzaSkeleton times={6}/>
                    : pizzas.map(item => <PizzaBlock key={item.id}{...item}/>)
                }
            </div>
            <Pagination setCurrentPAge={setCurrentPAge}/>
        </div>
    );
};