import React, { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = (props) => {
    let [portionNumber, setPortionNumber] = useState(props.currentPortion),
        leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1,
        rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div>
            <button className={portionNumber < 2 && s.hiddenBtn}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>Prev
            </button>
            {props.pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <button className={props.pages.length < 2 ? s.hiddenBtn : props.currentPage === p ? s.selectedPage : s.pages}
                                  key={p}
                                  onClick={() => {
                                      props.onPageChanged(p, portionNumber)
                                  }}>{p}</button>)
            }
            <button className={props.portions <= portionNumber && s.hiddenBtn}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>Next
            </button>
        </div>
    )
}

export default Paginator