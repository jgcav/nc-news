import React from 'react';

export default function OrderFilter({setSelectOrder}) {

    return (
        <div>
            <label htmlFor="order-by">Order By: </label>
            <select name="order-options" id="order-by" onChange={(e) => {
                setSelectOrder(e.target.value)
            }}>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>
        </div>
    )

}
