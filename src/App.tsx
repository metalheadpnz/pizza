import './scss/app.scss'

import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Route, Routes} from 'react-router-dom';
import {Cart} from "./pages/Cart";

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
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                {/*<div className="container">*/}
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                {/*</div>*/}
            </div>
        </div>
    )
}