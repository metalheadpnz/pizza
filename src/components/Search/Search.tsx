import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
// @ts-ignore
import styles from "./Search.module.scss"
// @ts-ignore
import searchIcon from "../../assets/img/search_strong_icon.svg"
// @ts-ignore
import cancelIcon from "../../assets/img/cancel_close_delete_icon.svg"
import {useAppDispatch} from "../../store/store";
import {updateSearchTitle} from "../../store/searchSlice";
import useDebounce from "../../Hooks/useDebounce";


type PropsType = {}

export const Search: React.FC<PropsType> = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useAppDispatch()
    const debounced = useDebounce(inputValue, 500)
    useEffect(() => {
        dispatch(updateSearchTitle(debounced))
    }, [debounced])
    const inputRef = useRef<HTMLInputElement>(null)

    const clearSearchValue = () => {
        setInputValue('')
        inputRef.current && inputRef.current.focus()
    }

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <div className={styles.root}>
            <img className={styles.searchIcon} src={searchIcon} alt="?"/>
            <input
                ref={inputRef}
                value={inputValue}
                onChange={onInputChangeHandler}
                className={styles.input}
                placeholder="поиск пиццы..."
                type="text"/>
            <img onClick={clearSearchValue} className={styles.cancelIcon} src={cancelIcon} alt="X"/>

        </div>

    );
};