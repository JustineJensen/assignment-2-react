const validateKey = key =>{
    if(!key || typeof key !== 'string'){
        throw  new Error('Invalid storage key provided')
    }

}

export const storageSave = (key, value) => {
    validateKey(key)
    if(!value){
        throw new Error('storageSave:No new value provided' + key)
    }
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {
    validateKey(key)
    const data = sessionStorage.getItem(key)
    // check is data exists
    if (data) {
        return JSON.parse(data) //convert json to javascript object
    }

    return null
}

export const StorageDelete = key =>{
    validateKey(key)
    sessionStorage.removeItem(key)
}

