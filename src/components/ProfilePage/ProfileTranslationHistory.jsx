import ProfileTranslationHistoryList from "./ProfileTranslationHistoryList"


// TranslationList should be a state to re-render each time a new translation is made
const ProfileTranslationHistory = ({ translations }) => {
    
    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryList key={index + '-' + translation} translation={translation} /> )
    
    return (
        <section> 
            <h4>Last 10 Translations </h4>
            {translationList.length === 0 && <p>You have no translations yet.</p>}
           
            <ul>
                {translationList}
            </ul> 
        </section>
    )
}

export default ProfileTranslationHistory
