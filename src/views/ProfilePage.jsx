import withAuth from "../hoc/withAuth"
import ProfileHeader from "../components/ProfilePage/ProfileHeader"
import ProfileActions from "../components/ProfilePage/ProfileActions"
import ProfileTranslationHistory from "../components/ProfilePage/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import { userById } from "../api/user"
import { useEffect } from "react"
import { storageSave } from "../Utils/Storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"


// Profile

const ProfilePage = () => {
    const { user ,setUser} = useUser()
    useEffect(()=>{
        const findUser =async()=>{
            const[error,latestUser] = await userById(user.id)
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
            <ProfileActions />
            <ProfileTranslationHistory translations={ user.translations } />
        </> 
    )
}

export default withAuth(ProfilePage)

