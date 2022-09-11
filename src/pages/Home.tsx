import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Сategories";
import {Sort} from "../components/Sort";
import {PizzaSkeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {Pagination} from "../components/Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../store/store";
import {setLoadingStatus} from "../store/appSlice";
import {setPizzas} from "../store/pizzasSlice";

const sortTypes = ['rating', 'price', 'title']

type PropsType = {}

export const Home: React.FC<PropsType> = () => {
    const {pizzasCategoryCode, searchTitle, sortCode} = useAppSelector(state => state.search)
    const isLoading = useAppSelector(state => state.appStatus.isLoading)
    const pizzas = useAppSelector(state => state.pizzas.pizzas)

    const dispatch = useAppDispatch()

    const [currentPage, setCurrentPAge] = useState(1)

    useEffect(() => {
        const sortParam = `&sortBy=${sortTypes[sortCode]}`
        const categoryParam = pizzasCategoryCode ? `&category=${pizzasCategoryCode}` : ''
        const search = searchTitle ? `&search=${searchTitle}` : ''
        dispatch(setLoadingStatus(true))
        fetch(`https://6316576e82797be77fe3b2e6.mockapi.io/items?page=${currentPage}&limit=4${sortParam}${categoryParam}${search}`)
            .then(res => res.json())
            .then(json => {
                dispatch(setPizzas(json))
                dispatch(setLoadingStatus(false))
            })
        window.scrollTo(0, 0)
    }, [sortCode, pizzasCategoryCode, searchTitle, currentPage])

    // const pizzas = items.filter(pizza => pizza.title.toLowerCase().includes(searchTitle.toLowerCase().trim()))

    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
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