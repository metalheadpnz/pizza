import React, {useContext} from 'react';
// @ts-ignore
import styles from "./Search.module.scss"
// @ts-ignore
import searchIcon from "../../assets/img/search_strong_icon.svg"
// @ts-ignore
import cancelIcon from "../../assets/img/cancel_close_delete_icon.svg"
import {SearchContext} from "../../App";

type PropsType = {}

export const Search: React.FC<PropsType> = () => {

    const {searchValue, setSearchValue} = useContext(SearchContext)
    return (
        <div className={styles.root}>
            <img className={styles.searchIcon} src={searchIcon} alt="?"/>
            <input value={searchValue}
                   onChange={(e) => setSearchValue(e.currentTarget.value)}
                   className={styles.input}
                   placeholder="поиск пиццы..."
                   type="text"/>
            {searchValue &&
                <img onClick={() => setSearchValue('')} className={styles.cancelIcon} src={cancelIcon} alt="X"/>}

        </div>

    );
};