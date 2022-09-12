import React, {ChangeEvent, useCallback, useRef, useState} from 'react';
// @ts-ignore
import styles from "./Search.module.scss"
// @ts-ignore
import searchIcon from "../../assets/img/search_strong_icon.svg"
// @ts-ignore
import cancelIcon from "../../assets/img/cancel_close_delete_icon.svg"
import {useAppDispatch, useAppSelector} from "../../store/store";
import {updateSearchTitle} from "../../store/searchSlice";
// @ts-ignore
import {debounce} from 'lodash'
// @ts-ignore

type PropsType = {}

export const Search: React.FC<PropsType> = () => {
    const searchValue = useAppSelector(state => state.search.searchTitle)

    const [inputValue, setInputValue] = useState('')

    const dispatch = useAppDispatch()

    const inputRef = useRef<HTMLInputElement>(null)

    const debounceInput = useCallback(
        debounce((toBeDebounced: string) => {
            console.log('DEB', toBeDebounced)
            dispatch(updateSearchTitle(toBeDebounced))
        }, 700)
        , [searchValue])

    const clearSearchValue = () => {
        setInputValue('')
        dispatch(updateSearchTitle(''))
        inputRef.current && inputRef.current.focus()
    }

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
        debounceInput(e.currentTarget.value)
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