import React from 'react';
import {phases, herbs, crystals} from '../../data/data.js'




const Results = ({ userPhrase }) => {

    const recommendedPhase = userPhrase ? phases.filter(phase => phase.properties.includes(userPhrase))[0]?.name : null;
    const recommendedHerbArray = herbs.filter(herb => herb.properties.includes(userPhrase));
    const recommendedCrystalArray = crystals.filter(crystal => crystal.properties.includes(userPhrase));
console.log(recommendedHerbArray)
    return (
        <>

                <div className="font-josefin-sans flex justify-center">
                    <div className="">
                    <p className="text-2xl">A spell for {userPhrase}</p>
                        {recommendedPhase && <p className="text-xl">Perform at the {recommendedPhase} moon.</p>}
                        {recommendedHerbArray && <p className="text-xl">Herbs: {recommendedHerbArray.map(each => `${each.name} `)}</p>}
                        {recommendedCrystalArray && <p className="text-xl">Crystals: {recommendedCrystalArray.map(each => `${each.name} `)}</p>}
                    </div>
                </div>

        </>
    )

}

export default Results;