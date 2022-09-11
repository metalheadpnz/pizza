import React from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {updateSortPizzasCategoryCode} from "../redux/searchSlice";

export const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

type PropsTypes = {}

export const Categories: React.FC<PropsTypes> = () => {
    const dispatch = useAppDispatch()
    const category = useAppSelector(state => state.search.sortPizzasCategoryCode)

    const onClickCategory = (index: number) => {
        dispatch(updateSortPizzasCategoryCode(index))
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((catName, index) =>
                    <li children={catName}
                        onClick={() => onClickCategory(index)}
                        className={index === category ? 'active' : ''}
                        key={index}/>
                )}
            </ul>
        </div>
    );
};