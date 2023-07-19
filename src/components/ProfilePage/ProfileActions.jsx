import { Link } from "react-router-dom"
// import { storageRead } from "../../Utils/Storage"
import { useUser } from "../../context/UserContext"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { StorageDelete } from "../../Utils/Storage"

const ProfileActions = () => {

    const { setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure? ')) {
            //send an event to a parent-profile view
            StorageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    return (
        <ul>
            <li><Link to="/translation">Translations </Link> </li>
            <li> <button>Delete</button></li>
            <li> <button onClick={ handleLogoutClick}>Logout</button></li>
        </ul>
    )
}

export default ProfileActions
