import React, {useEffect, useState} from 'react'
import getFakeData from '../services/getFakeData'
import Filters from './components/Filters'


const Home = () => {
    const [allData, setAllData] = useState()
    const [filteredData, setFilteredData] = useState()
    const [loading, setLoading] = useState(true)

    const [region, setRegion] = useState('-1')
    const [type, setType] = useState('-1')
    const [condition, setCondition] = useState('-1')




    useEffect(() => {
        getFakeData()
            .then(res => {
                setAllData(res)
                setFilteredData(res)
                setLoading(false)
            })
    }, []);

    useEffect(() => {
        let midFilterData = allData;
        if (condition !=='-1') {
            midFilterData = midFilterData.filter(each => each.conditions.includes(condition))
        }
        if (region!=='-1') {
            midFilterData = midFilterData.filter(each => each.region===region)
        }
        if (type!=='-1') {
            midFilterData=midFilterData.filter(each => each.type===type)
        }
        setFilteredData(midFilterData)
    },[condition, type, region])

    if (loading) return null;

    return (
        <>
            <Filters setRegion={setRegion} setType={setType} setCondition={setCondition}/>
            <div className="flex flex-col justify-center w-4/5 h-auto md:flex-wrap md:flex-row font-josefin-sans">
                {filteredData.map(each =>
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