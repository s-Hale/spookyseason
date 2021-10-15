import React, {useState} from 'react'
import UserInput from './components/UserInput/index'
import Results from './components/Results/index.js'








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

            </div>
        </>
    )
};


export default Home;