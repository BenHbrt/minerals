const mineralsList = [
    {
        name: "Aquamarine",
        type: "Beryl",
        image: "aquamarine.jpeg",
        notes: "This is a pretty, shiny, blue, diamondy thing.",
        link: "https://en.wikipedia.org/wiki/Aquamarine_(gem)"
    },
    {
        name: "Emerald",
        type: "Beryl",
        image: "emerald.jpeg",
        notes: "This is a pretty, shiny, green, diamondy thing.",
        link: "https://en.wikipedia.org/wiki/Emerald"
    },
    {
        name: "Amethyst",
        type: "Silicate",
        image: "amethyst.jpeg",
        notes: "This is a pretty, shiny, purple, diamondy thing that comes in stoney egg shapes.",
        link: "https://en.wikipedia.org/wiki/Aquamarine_(gem)"
    },
    {
        name: "Citrine",
        type: "Silicate",
        image: "citrine.jpeg",
        notes: "This is a pretty, shiny, yellowy-orange, diamondy thing.",
        link: ""
    }
]

export const types = () => {
    const list = []
    mineralsList.forEach((mineral) => {
        if (!list.includes(mineral.type)) {
            list.push(mineral.type)
        }
    })
    return list
}

export const minerals = () => {
    const list = []
    mineralsList.forEach((mineral) => {
        if (!list.includes(mineral.type)) {
            list.push(mineral.type)
        }
    })
    const sortedData = {}
    list.forEach((type) => {
        const typeList = []
        mineralsList.forEach((mineral) => {
            if (type === mineral.type) {
                typeList.push(mineral)
            }
        })
        sortedData[type] = typeList
    })
    return sortedData
}