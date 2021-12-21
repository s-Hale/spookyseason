import React, {useEffect, useState} from 'react'
import getFakeData from '../services/getFakeData'
import Leaves from '../../svg/003-leaves.svg'

const Home = () => {
    const [fakeData, setFakeData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFakeData()
            .then(res => {
                setFakeData(res)
                setLoading(false)
            })
    }, []);

    if (loading) return null;

    return (
        <>
            <div className="flex flex-col justify-center font-josefin-sans">
                {fakeData.map(each =>
                    <div className="p-3 m-2 border border-gray-400 rounded-xl">
                      <div className="flex justify-end"><img src={Leaves} alt='leaves' className="w-12"/></div>
                        <p>name: {each.name}</p>
                        <p>method: {each.method}</p>
                        <p>source: {each.source}</p>
                    </div>
                )}
            </div>
        </>
)};


export default Home;