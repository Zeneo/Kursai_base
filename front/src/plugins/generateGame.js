import helpers from "./helpers"

const generateItem = {
    key: () => {
        return {
            icon: "🔑",
            id: helpers.generate_id(),
            type: "key",
        }
    },
    gold: () => {
        return {
            icon: '💰',
            id: helpers.generate_id(),
            type: "gold",
            value: helpers.rnd(30)+5
        }
    },
    potion: () => {
        return {
            icon: "🧃",
            id: helpers.generate_id(),
            type: "potion",
        }
    },
    enemy: () => {
        return {
            icon: "👻",
            id: helpers.generate_id(),
            inside: [...addItems()],
            hp: helpers.rnd(20)+3,
            type: "enemy",
        }
    },
    chest: () => {
        return {
            icon: "📦",
            id: helpers.generate_id(),
            type: "chest",
            locked: true,
            inside: [...addItems()]
        }
    },
    folder: () => {
        return {
            icon: "📁",
            id: helpers.generate_id(),
            type: "folder",
            inside: []
        }
    }
}

function addItems() {
    const result = []
    const itemsInFolder = helpers.rnd(5)+1
    const possibleItems = [
        "key",
        "potion",
        "gold"
    ]
    for (let i = 0; i < itemsInFolder; i++) {
        const itemToGenerate = possibleItems[helpers.rnd(possibleItems.length-1)]
        const myItem = generateSingleItem(itemToGenerate)
        result.push(myItem)
    }

    return result
}


const generateSingleItem = (name) => {
    if(name === "chest") {
        return generateItem.chest()
    }
    if(name === "enemy") {
        return generateItem.enemy()
    }
    if(name === "potion") {
        return generateItem.potion()
    }
    if(name === "key") {
        return generateItem.key()
    }
    if(name === "gold") {
        return generateItem.gold()
    }
}


const generateSingleFolder = () => {
    const folder = generateItem.folder()

    const itemsInFolder = helpers.rnd(9)+1
    const possibleItems = [
        "chest",
        "enemy",
        "key",
        "potion",
        "gold"
    ]

    for (let i = 0; i < itemsInFolder; i++) {
        const itemToGenerate = possibleItems[helpers.rnd(possibleItems.length-1)]
        const myItem = generateSingleItem(itemToGenerate)

        folder.inside.push(myItem)
    }

    return folder
}

export default () => {

    const result = []

    for (let i = 0; i < 9; i++) {
        result.push(generateSingleFolder())
    }

    return result
}