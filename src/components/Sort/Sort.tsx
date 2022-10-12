import React, {SyntheticEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {toggleSortDirection, updateSortCode} from "../../store/searchSlice";
//@ts-ignore
import arrow from "../../assets/img/arrow-top.svg"
//@ts-ignore
import styles from "./Sort.module.css"

type PropsType = {}

export const Sort: React.FC<PropsType> = () => {
    const {sortCode, sortDirection} = useAppSelector(s => s.search)
    const dispatch = useAppDispatch()

    const [open, setOpen] = useState(false)

    const changeSortMode = (i: number) => {
        dispatch(updateSortCode(i))
    }
    const toggleDirection = (e: SyntheticEvent) => {
        e.stopPropagation()
        dispatch(toggleSortDirection())
    }

    const sortModes = ['популярности', 'цене', 'алфавиту']

    return (
        <div onClick={(e) => {
            setOpen(!open)
        }
        }
             className="sort">
            <div className="sort__label">
                <div className={styles.arrow} onClick={toggleDirection}>
                    <img src={arrow} alt="arrow"
                         className={sortDirection === "DESC" ? styles.rotated : ""}/>
                </div>
                <b>Сортировка по:</b>
                <span>{sortModes[sortCode]}</span>
            </div>
            {open && (
                <div
                    className="sort__popup">
                    <ul>
                        {
                            sortModes.map((mode, i) =>
                                <li key={mode}
                                    onClick={() => changeSortMode(i)}
                                    className={i === sortCode ? 'active' : ''}>
                                    {mode}
                                </li>
                            )
                        }
                    </ul>
                </div>)}
        </div>
    );
};