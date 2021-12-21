
const getFakeData = () => {
    return Promise.resolve(
        [{
            name: 'remedie for the eyes',
            source: 'Mrs Eldritch Book of Cures',
            method: 'Boil thyne eyes until healed',

        }, {
            name: 'a cure for pox',
            source: 'Yorkshire Remedyes',
            method: 'apply oil of nutmegs and hope'

        }, {
            name: 'for poor humors',
            source: 'Dr Butler Herbal Companion',
            method: 'fresh air and blood letting'

        }]
    )
}


export default getFakeData;