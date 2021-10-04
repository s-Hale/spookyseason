import React from 'react'
import UserInput from './components/UserInput/index'
import { ReactComponent as Cauldron } from '../../svg/cauldron.svg'
import { ReactComponent as Mortar } from '../../svg/mortar.svg'
import { ReactComponent as Ball } from '../../svg/006-magic-ball.svg'
import { ReactComponent as Herb } from '../../svg/003-leaves.svg'
import { ReactComponent as Moon } from '../../svg/007-moon.svg'








const Home = () => {
    return (
        <>
            <div className="font-josefin-sans flex flex-col h-60 justify-center items-center">Craft me a rite for...<UserInput /></div>
            <div className="flex w-2/3 justify-between">
                <Cauldron />
                <Mortar/>
                <Ball />
                <Herb />
                <Moon/>
            </div>
            </>
    )
};


export default Home;