import React from 'react'
import ReactPaginate from "react-paginate";
//@ts-ignore
import styles from "./Pagination.module.scss"
import {useAppDispatch, useAppSelector} from "../../store/store";
import {changeCurrentPage} from "../../store/searchSlice";

type PropsType = {}

export const Pagination: React.FC<PropsType> = () => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.search.currentPage)
    return (
        <ReactPaginate
            forcePage={currentPage-1}
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(e) => dispatch(changeCurrentPage(e.selected + 1))}
            pageRangeDisplayed={4}
            pageCount={3}
            // renderOnZeroPageCount={null}
        />
    )
}