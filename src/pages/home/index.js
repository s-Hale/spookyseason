import React, {useState} from 'react'
import UserInput from './components/UserInput/index'
import Results from './components/Results/index.js'
import { ReactComponent as Cauldron } from '../../svg/cauldron.svg'
import { ReactComponent as Mortar } from '../../svg/mortar.svg'
import { ReactComponent as Ball } from '../../svg/006-magic-ball.svg'
import { ReactComponent as Herb } from '../../svg/003-leaves.svg'
import { ReactComponent as Moon } from '../../svg/007-moon.svg'







const Home = () => {
    const [userPhrase, setUserPhrase] = useState('');





    return (
        <>
            <div className="font-josefin-sans flex flex-col h-60 justify-center items-center">
                Craft me a rite for...
                <UserInput setUserPhrase={setUserPhrase} />
            </div>
            <div className="flex flex-col justify-between">
                <Results userPhrase={userPhrase}/>
                {/* <Cauldron/>
                <Mortar/>
                <Ball />
                <Herb />
                <Moon/> */}
            </div>
        </>
    )
};


export default Home;