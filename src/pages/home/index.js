import React, {useEffect, useState} from 'react'
import getFakeData from '../services/getFakeData'
import Filters from './components/Filters'


const Home = () => {
    const [allData, setAllData] = useState()
    const [loading, setLoading] = useState(true)
    const [region, setRegion] = useState()
    const [type, setType] = useState()
    const [condition, setCondition] = useState()

    useEffect(() => {
        getFakeData()
            .then(res => {
                setAllData(res)
                setLoading(false)
            })
    }, []);

    const noSearch = !condition && !type && !region;

    if (loading) return null;

    return (
        <>
            <Filters setRegion={setRegion} setType={setType} setCondition={setCondition}/>
            <div className="flex flex-col md:flex-wrap h-1/4 md:flex-row font-josefin-sans">
                {allData.map(each =>
                    <div className="p-3 m-2 border border-gray-400 w-72 rounded-xl">
                        <div className="flex justify-end">
                            <img src={each.imageURL.default} alt='icon' className="w-12" />
                        </div>
                        <h6 className="text-xl text-green-900">{each.name}</h6>
                        <p className="text-gray-700">{each.method}</p>
                        <p className="text-sm italic text-gray-500">from: {each.source}</p>
                    </div>
                )}
            </div>
        </>
)};


export default Home;