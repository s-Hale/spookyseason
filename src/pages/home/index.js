import React from 'react'
import Cauldron from './../../svg/cauldron.svg'

const Home = () =>(
        <>

            <div className="flex flex-col items-center justify-center font-josefin-sans">
            <img src={Cauldron} alt='cauldron'/>
                <p>brewing something...</p>
            </div>

        </>
    );


export default Home;