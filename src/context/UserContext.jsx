import { createContext, useContext,useState } from "react"
import { storageRead } from "../Utils/Storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"


// Context object -> exposing the state
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) // {user, setUser}
}

// Provider -> managing state
const UserProvider = (props) => {
    const [ user, setUser ] = useState(storageRead( STORAGE_KEY_USER ))

    const state = {
        user,
        setUser
    }
    return (
        <UserContext.Provider value = { state }>
            { props.children }
        </UserContext.Provider> 
    )
}
export default UserProvider