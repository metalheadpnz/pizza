import './scss/app.scss'

import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Route, Routes} from 'react-router-dom';
import {Cart} from "./pages/Cart";
import React, {useState} from "react";


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

export const SearchContext = React.createContext({
    searchValue: '', setSearchValue: (e: string) => {
    }
})

export const App = () => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                    <div className="content">
                        <Routes>
                            <Route path='/' element={<Home searchValue={searchValue}/>}/>
                            <Route path='cart' element={<Cart/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </div>
            </SearchContext.Provider>
        </div>
)
}