import React from 'react';

export default function SortByFilter({setSelectSortBy}) {


    return (
        <div>
            <label htmlFor="sort-by">Sort By: </label>
            <select name="sort-options" id="sort-by" onChange={(e) => {
                setSelectSortBy(e.target.value)
            }}>
                <option value="created_at">Date</option>
                <option value="votes">Votes</option>
            </select>
        </div>
    )

}