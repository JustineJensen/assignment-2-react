import { Link } from "react-router-dom"
// import { storageRead } from "../../Utils/Storage"
import { useUser } from "../../context/UserContext"
import { StorageDelete } from "../../Utils/Storage"
import deleteTranslations from "../../api/translation"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { storageSave } from "../../Utils/Storage"
import ProfileTranslationHistory from "./ProfileTranslationHistory"
import './ProfilePage.css'


const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure? ')) {
            //send an event to a parent-profile view
            StorageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    
    // clearing the translation history
    const handleDeleteClick =async() =>{
        if(!window.confirm('You are about to delete the translation history!\n This can not be undone')){
            return
        }

        // clear the history and then update the user with the new info
        const [clearError] = await deleteTranslations(user.id) //user not defined
        if(clearError !== null){
            return
        }
        const updatedUser ={
            ...user, //user not defined
            translations:[]
        }
        storageSave(STORAGE_KEY_USER,updatedUser)
        setUser(updatedUser)
        //ProfileTranslationHistory()
    }
    return (
        <>
            {/* <Link to="/translation">Translations </Link> */}
             <button id="profileButtons" onClick ={handleDeleteClick}>Delete</button>
             <button id="profileButtons" onClick={ handleLogoutClick}>Logout</button>
        </>
    )
}

export default ProfileActions
