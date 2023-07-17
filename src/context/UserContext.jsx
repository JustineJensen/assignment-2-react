import { createContext, useContext,useState } from "react"

// Context object -> exposing the state
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) // {user, setUser}
}

// Provider -> managing state
const UserProvider = (props) => {
    const [ user, setUser ] = useState(null)

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