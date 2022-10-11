import React, {useEffect, useRef} from 'react';
import {Categories} from "../components/Сategories";
import {Sort} from "../components/Sort/Sort";
import {PizzaSkeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {Pagination} from "../components/Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../store/store";
import {setLoadingStatus} from "../store/appSlice";
import {setPizzas} from "../store/pizzasSlice";
import axios from "axios";
import qs from 'qs';
import {useNavigate} from "react-router-dom";
import {setFilters} from "../store/searchSlice";

const sortTypes = ['rating', 'price', 'title']

type PropsType = {}

export const Home: React.FC<PropsType> = () => {
    const {
        pizzasCategoryCode,
        searchTitle,
        sortCode,
        currentPage,
        sortDirection
    } = useAppSelector(state => state.search)
    const isLoading = useAppSelector(state => state.appStatus.isLoading)
    const pizzas = useAppSelector(state => state.pizzas.pizzas)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const fetchPizzas = () => {
        const sortParam = `&sortBy=${sortTypes[sortCode]}`
        const categoryParam = pizzasCategoryCode ? `&category=${pizzasCategoryCode}` : ''
        const search = searchTitle ? `&search=${searchTitle}` : ''
        const queryParams = `page=${currentPage}&limit=4${sortParam}${categoryParam}${search}&order=${sortDirection.toLowerCase()}`
        dispatch(setLoadingStatus(true))
        axios.get(`https://6316576e82797be77fe3b2e6.mockapi.io/items?${queryParams}`
        )
            .then(res => {
                dispatch(setPizzas(res.data))
                dispatch(setLoadingStatus(false))
            })
    }

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            console.log(params)
            dispatch(setFilters({
                currentPage: params.currentPage ? +params.currentPage : 0,
                sortDirection: params.order ? params.order === 'asc' ? 'ASC' : 'DESC' : 'ASC',
                sortCode: params.sortProperty ? sortTypes.findIndex(i => i === params.sortProperty) : 0,
                pizzasCategoryCode: params.pizzasCategoryCode ? +params.pizzasCategoryCode : 0
            }))
            //{sortProperty: 'rating', pizzasCategoryCode: '0', currentPage: '1', order: 'asc'}

            isSearch.current = true
        }
    }, [])

    useEffect(() => {
        if (!isSearch.current) {
            fetchPizzas()
        }
        isSearch.current = false
        window.scrollTo(0, 0)
    }, [sortCode, pizzasCategoryCode, searchTitle, currentPage, sortDirection])

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortTypes[sortCode],
                pizzasCategoryCode,
                currentPage,
                order: sortDirection.toLowerCase()
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [sortCode, pizzasCategoryCode, searchTitle, currentPage, sortDirection])

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
            <Pagination/>
        </div>
    );
};