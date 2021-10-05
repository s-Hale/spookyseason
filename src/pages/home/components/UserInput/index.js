import React from 'react'

const UserInput = ({ setUserPhrase }) => {
    let inputVal = '';

    const handleChange = (e) => {
        inputVal = e.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserPhrase((inputVal))
    };


    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <input type="text" className="w-50 text-xl text-center border border-gray-400 rounded-xl py-2 px-4" onChange={handleChange}></input>
                <button type="submit">go</button>
            </form>
        </div>
    )
};


export default UserInput;