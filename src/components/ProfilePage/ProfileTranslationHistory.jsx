import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { apiUrl } from "../../api/translation";
import { useState } from "react";
import "./ProfilePage.css";
import "../../views/Translations.css";

const ProfileTranslationHistory = () => {
  const { user } = useUser();
  const [translations, setTranslations] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}?username=${user.username}`)
      .then((response) => response.json())
      .then((results) => {
        setTranslations(results[0].translations);
      })
      .catch((error) => {
        console.log("Couldn't fetch user name");
      });
  }, []);

  const translationList = translations.map((translation, index) => (
    <li key={index + "-" + translation}> {translation} </li>
  ));

  return (
    <section  id ="displaySection">
      <h4>Last 10 Translations: </h4>
      {translationList.length === 0 && <p>You have no translations.</p>}

      <ul id="ulTranslationList">{translationList}</ul>
    </section>
  );
};

export default ProfileTranslationHistory;
