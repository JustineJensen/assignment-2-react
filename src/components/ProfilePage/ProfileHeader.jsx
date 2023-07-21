import ProfilePage from "../../views/ProfilePage";
import "../../views/Translations.css";

const ProfileHeader = ({ username }) => {
  return (
    <header>
      <h4>Hello, welcome back {username} </h4>
    </header>
  );
};

export default ProfileHeader;
