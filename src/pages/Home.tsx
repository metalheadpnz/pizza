import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Сategories";
import {Sort} from "../components/Sort";
import {PizzaSkeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {pizzaType} from "../App";
import {Pagination} from "../components/Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {setLoadingStatus} from "../redux/appSlice";

const sortTypes = ['rating', 'price', 'title']

type PropsType = {}

export const Home: React.FC<PropsType> = () => {
    const [items, setItems] = useState<pizzaType[]>([])
    const [currentPage, setCurrentPAge] = useState(1)

    const category = useAppSelector(state => state.search.pizzasCategoryCode)
    const searchValue = useAppSelector(state => state.search.searchTitle)
    const sortCode = useAppSelector(state => state.search.sortCode)
    const isLoading = useAppSelector(state => state.appStatus.isLoading)

    const dispatch = useAppDispatch()

    useEffect(() => {
        const sortParam = `&sortBy=${sortTypes[sortCode]}`
        const categoryParam = category ? `&category=${category}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''
        dispatch(setLoadingStatus(true))
        fetch(`https://6316576e82797be77fe3b2e6.mockapi.io/items?page=${currentPage}&limit=4${sortParam}${categoryParam}${search}`)
            .then(res => res.json())
            .then(json => {
                setItems(json)
                dispatch(setLoadingStatus(false))
            })
        window.scrollTo(0, 0)
    }, [sortCode, category, searchValue, currentPage])


    const pizzas = items.filter(pizza => pizza.title.toLowerCase().includes(searchValue.toLowerCase().trim()))

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