import React, { useState } from 'react'
import s from './Paginator.module.css'
import { Pagination } from 'react-bootstrap'

const Paginator = (props) => {
    let [portionNumber, setPortionNumber] = useState(props.currentPortion),
        leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1,
        rightPortionPageNumber = portionNumber * props.portionSize
    return (
        <Pagination size={'sm'}>
            <Pagination.Prev disabled={portionNumber < 2}
                             className={props.pages.length < 2 && s.hiddenBtn}
                             onClick={() => {
                                 setPortionNumber(portionNumber - 1)
                             }}/>
            {props.pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <Pagination.Item className={props.pages.length < 2 && s.hiddenBtn}
                                           active={props.currentPage === p}
                                           key={p}
                                           onClick={() => {
                                               props.onPageChanged(p, portionNumber)
                                           }}>{p}</Pagination.Item>)
            }
            <Pagination.Next
                disabled={props.portions <= portionNumber}
                className={props.pages.length < 2 && s.hiddenBtn}
                onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}/>
        </Pagination>
    )
}

export default Paginator