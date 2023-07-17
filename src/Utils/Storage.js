export const storageSave = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {
    const data = localStorage.getItem(key)
    // check is data exists
    if (data) {
        return JSON.parse(data) //convert json to javascript object
    }

    return null
}