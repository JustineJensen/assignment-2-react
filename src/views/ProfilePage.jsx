import withAuth from "../hoc/withAuth"
import ProfileHeader from "../components/ProfilePage/ProfileHeader"
import ProfileActions from "../components/ProfilePage/ProfileActions"
import ProfileTranslationHistory from "../components/ProfilePage/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import { getUser } from "../api/user"
import { useEffect } from "react"
import { storageSave } from "../Utils/Storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"


// Profile

const ProfilePage = () => {
    const { user ,setUser} = useUser()
    useEffect(()=>{
        const findUser =async()=>{
            const[error,latestUser] = await getUser(user.username)
            if(error === null){
                storageSave(STORAGE_KEY_USER,latestUser)
                setUser(latestUser)
            }
}
findUser()
},[setUser,user.id])

    return (
        <>
            <h1>Profile page </h1>
            <ProfileHeader username={ user.username }/> 
            <ProfileTranslationHistory />
            <ProfileActions />
            
        </> 
    )
}

export default withAuth(ProfilePage)

