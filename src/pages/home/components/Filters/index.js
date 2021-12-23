import React from 'react'



const Filters = ({setRegion, setType, setCondition}) => {
    const conditionOptions = [
        {
            label: "Choose condition",
            value: '-1'
          },
        {
          label: "Melancholy",
          value: "melancholy",
        },
        {
          label: "Bladder",
          value: "bladder",
        },
        {
          label: "Plague",
          value: "plague",
        },
        {
          label: "Wounds",
          value: "wounds",
        },
    ];

    const regionOptions = [
        {
            label: "Choose region",
            value: '-1',
          },
        {
          label: "Scotland",
          value: "scotland",
        },
        {
          label: "England",
          value: "england",
        },
        {
          label: "Wales",
          value: "wales",
        },
        {
          label: "Ireland",
          value: "ireland",
        },
    ];

    const typeOptions = [
        {
            label: "Choose type",
            value: '-1',
          },
        {
          label: "Tincture",
          value: "tincture",
        },
        {
          label: "Charm",
          value: "charm",
        },
        {
          label: "Decoction",
          value: "decoction",
        },
    ];

    const handleFilterChange = (e, filterType) => {
        switch (filterType) {
            case "condition":
                setCondition(e.target.value)
                break;
            case "region":
                setRegion(e.target.value)
                break;
            case "type":
                setType(e.target.value)
                break;
            default: break;
    }
}


    return (
        <div className="flex flex-col w-2/3 py-1 md:w-1/2 md:flex-row md:justify-between">

            <select onChange={(e) => handleFilterChange(e, 'condition')} className="p-2 mx-2 border border-gray-200 md:w-1/3 font-josefin-sans rounded-xl">
            {conditionOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
            <select onChange={(e) => handleFilterChange(e, 'region')} className="p-2 mx-2 border border-gray-200 md:w-1/3 font-josefin-sans rounded-xl">
            {regionOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>

            <select onChange={(e) => handleFilterChange(e, 'type')} className="p-2 mx-2 border border-gray-200 md:w-1/3 font-josefin-sans rounded-xl">
            {typeOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>
        </div>
)};


export default Filters;