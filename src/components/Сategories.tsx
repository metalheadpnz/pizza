import React from 'react';

export const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

type PropsTypes = {
    category: number
    setCategory: (cat: number) => void
}

export const Categories: React.FC<PropsTypes> = ({setCategory, category}) => {
    const onClickCategory = (index: number) => {
        setCategory(index)
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