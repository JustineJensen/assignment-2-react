import withAuth from "../hoc/withAuth";
import ProfileHeader from "../components/ProfilePage/ProfileHeader";
import ProfileActions from "../components/ProfilePage/ProfileActions";
import ProfileTranslationHistory from "../components/ProfilePage/ProfileTranslationHistory";
import { useUser } from "../context/UserContext";
import { getUser } from "../api/user";
import { useEffect } from "react";
import { storageSave } from "../Utils/Storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import "./Translations.css";



const ProfilePage = () => {
  const { user, setUser } = useUser();
  return (
    <>
      <h2 id="profileHeader">Profile page </h2>
      <ProfileHeader username={user.username} />
      <ProfileActions />
      <ProfileTranslationHistory />
    </>
  );
};

export default withAuth(ProfilePage);
