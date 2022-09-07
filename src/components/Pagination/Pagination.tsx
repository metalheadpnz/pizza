import React from 'react'
import ReactPaginate from "react-paginate";
//@ts-ignore
import styles from "./Pagination.module.scss"

type PropsType = {
    setCurrentPAge: (num: number) => void
}

export const Pagination: React.FC<PropsType> = ({setCurrentPAge}) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(e) => setCurrentPAge(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            // renderOnZeroPageCount={null}
        />
    )
}