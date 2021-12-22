
const getFakeData = () => {




    return Promise.resolve(
        [{
            name: 'The Altering Syrup of Apples',
            source: 'The Compleat Herbal of Physical Plants, John Pechey, 1707',
            method: 'Take the juice of fragrant Pippins two quarts, of the Flowers of Violets, each one pound; boyl them and clarifie them, add seven pounds of fine sugar and a pint of Rose-water, boyl them to a syrup. One ounce of this syrup, taken morning and evening, is good for melancholy people.',
            imageURL: require('../../../svg/005-herbs.svg'),
            region: 'england',
            conditions: ['melancholy'],
            type: 'tincture'
        },
        {
            name: 'Uses of the Bay-Tree',
            source: 'The Compleat Herbal of Physical Plants, John Pechey, 1707',
            method: 'A decoction of the Bark, Berries and Leaves of the Bay-Tree make a good bath for the Diseases of the Womb and Bladder. The Berries are very effectual against all Poison of venomous creatures and stinging of wasps and bees, and also in the Plague.',
            imageURL: require('../../../svg/004-berries.svg'),
            region: 'england',
            conditions: ['bladder', 'venom', 'plague'],
            type: 'decoction'
            },
            {
            name: 'Nine Herbs Charm',
            source: 'Lacnunga, 10th century',
            method: 'A snake came crawling, it bit a man. Then Woden took nine glory-twigs, Smote the serpent so that it flew into nine parts. There apple brought this pass against poison, That she nevermore would enter her house.',
            imageURL: require('../../../svg/004-berries.svg'),
            region: 'england',
            conditions: ['wounds'],
            type: 'charm'
            },
            {
            name: 'Irish Charm of the Plague',
            source: 'Dr Butler Herbal Companion',
            method: 'fresh air and blood letting',
                imageURL: require('../../../svg/003-leaves.svg'),
                region: 'ireland',
                conditions: ['wounds', 'plague'],
                type: 'charm'

        },{
            name: 'Uses of the Bay-Tree',
            source: 'The Compleat Herbal of Physical Plants, John Pechey, 1707',
            method: 'A decoction of the Bark, Berries and Leaves of the Bay-Tree make a good bath for the Diseases of the Womb and Bladder. The Berries are very effectual against all Poison of venomous creatures and stinging of wasps and bees, and also in the Plague.',
                imageURL: require('../../../svg/004-berries.svg'),
                region: 'scotland',
                conditions: ['melancholy'],
                type: 'decoction'

            },{
                name: 'Remedie for plague',
                source: 'Mrs Eldritch Book of Cures',
                method: 'apply garlic and vinegar',
                imageURL: require('../../../svg/005-herbs.svg'),
                region: 'ireland',
                conditions: ['plague'],
                type: 'tincture'

            },{
                name: 'Boiled Basil for Poor Humor',
                source: 'Mrs Eldritch Book of Cures',
                method: 'Boil thyne eyes until healed',
                imageURL: require('../../../svg/005-herbs.svg'),
                region: 'england',
                conditions: ['melancholy'],
                type: 'tincture'

            }, {
                name: 'Warrior Charm of Caernarfon',
                source: 'Welsh Herbal',
                method: 'apply oil of nutmegs and hope',
                imageURL: require('../../../svg/004-berries.svg'),
                region: 'wales',
                conditions: ['wounds'],
                type: 'charm'

                },
                {
                name: 'A Bathing Routine for the Blood',
                source: 'Dr Butler Herbal Companion',
                method: 'fresh air and blood letting',
                    imageURL: require('../../../svg/003-leaves.svg'),
                    region: 'wales',
                    conditions: ['wounds'],
                    type: 'decoction'

            },{
                name: 'Charm for the Soul',
                source: 'Benedictine Peculiar',
                method: 'roasted onion in the ear',
                    imageURL: require('../../../svg/004-berries.svg'),
                    region: 'england',
                    conditions: ['melancholy'],
                    type: 'charm'

            },
            {
                name: 'Irish Tissane for Plague',
                source: 'Derry Ways of 1675',
                method: 'apply garlic and vinegar',
                imageURL: require('../../../svg/005-herbs.svg'),
                region: 'ireland',
                conditions: ['plague'],
                type: 'tincture'

            },{
                name: 'Cinnamon for the Melancholie',
                source: 'Mrs Eldritch Book of Cures',
                method: 'Boil thyne eyes until healed',
                imageURL: require('../../../svg/004-berries.svg'),
                region: 'england',
                conditions: ['melancholy'],
                type: 'tincture'

            }, {
                name: 'Welsh Tincture for Wounds',
                source: 'Cymru Remedyes',
                method: 'apply oil of nutmegs and hope',
                imageURL: require('../../../svg/004-berries.svg'),
                region: 'wales',
                conditions: ['wounds'],
                type: 'tincture'

                },
                {
                name: 'Scots Charm for the Bladder',
                source: 'Dr Butler Herbal Companion',
                method: 'fresh air and blood letting',
                    imageURL: require('../../../svg/003-leaves.svg'),
                    region: 'scotland',
                    conditions: ['bladder'],
                    type: 'charm'

            },{
                name: 'for earache',
                source: 'Benedictine Peculiar',
                method: 'roasted onion in the ear',
                    imageURL: require('../../../svg/004-berries.svg'),
                    region: 'england',
                    conditions: ['melancholy'],
                    type: 'charm'

                },]
    )
}


export default getFakeData;