export const checkForUser = async () => {
    try {
        const response = await fetch('??')
        if (!response.ok) {
            throw new Error ('Could not complete request')
        }
        const data = await response.json()
    }
    catch (error) {

    }
}

export const createUser = () => {

}