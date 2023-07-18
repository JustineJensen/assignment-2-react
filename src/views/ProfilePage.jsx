import withAuth from "../hoc/withAuth"
import ProfileHeader from "../components/ProfilePage/ProfileHeader"
import ProfileActions from "../components/ProfilePage/ProfileActions"
import ProfileTranslationHistory from "../components/ProfilePage/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"

// Profile

const ProfilePage = () => {
    const { user } = useUser()


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

