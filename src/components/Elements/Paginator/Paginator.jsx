import React, { useState } from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, onChange, portionSize = 6}) => {

    const pages = []

    const pagesCount = Math.ceil(totalItemsCount/ pageSize)
    for(let i = 0; i <= pagesCount; i++){
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount/ portionSize)
    const [portion, setPortion] = useState(1)
    const leftPortion = (portion - 1) * portionSize + 1
    const rightPortion = portion * portionSize

    

    return(
        <div>
            {portion > 1 &&
                <button onClick= {() => setPortion(portion - 1)}>prev</button>
            }
            {pages.filter(p => p >= leftPortion && p <= rightPortion)
            .map((p) => {
                return <span
                    onClick= {() => onChange(p)}
                    key= {p}
                >
                    {p}
                </span>
            })
            
            }
            {
                portionCount > portion &&
                <button onClick= {() => setPortion(portion + 1)}>
                    Next
                </button>
            }
        </div>
    )
}

export default Paginator