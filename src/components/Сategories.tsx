import React, {useState} from 'react';

export const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

type PropsTypes = {
    setCategory: (cat: number) => void
}

export const Categories: React.FC<PropsTypes> = ({setCategory}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const onClickCategory = (index: number) => {
        setActiveIndex(index)
        setCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) =>
                    <li children={category}
                        onClick={() => onClickCategory(index)}
                        className={index === activeIndex ? 'active' : ''}
                        key={index}/>
                )}
            </ul>
        </div>
    );
};