import React from 'react'



const Filters = () => {

    return (
        <div className="flex flex-col w-2/3 py-1 md:w-1/2 md:flex-row md:justify-between">
            <select className="p-2 mx-2 border border-gray-200 md:w-1/3 font-josefin-sans rounded-xl">
                <option>Eyes</option>
                <option>Headaches</option>
                <option>Plague</option>
                <option>Teeth</option>
            </select>

            <select className="p-2 mx-2 border border-gray-200 md:w-1/3 font-josefin-sans rounded-xl">
                <option>Scotland</option>
                <option>England</option>
                <option>Wales</option>
                <option>Ireland</option>
            </select>

            <select className="p-2 mx-2 border border-gray-200 md:w-1/3 font-josefin-sans rounded-xl">
                <option>Charms</option>
                <option>Tinctures</option>
                <option>Regimes</option>
                <option>Medicines</option>
            </select>
        </div>
)};


export default Filters;