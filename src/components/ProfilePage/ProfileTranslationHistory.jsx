import ProfileTranslationHistoryList from "./ProfileTranslationHistoryList"

const ProfileTranslationHistory = ({ translations }) => {
    
    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryList key={index + '-' + translation} translation={translation} /> )
    
    return (
        <section> 
            <h4>Last 10 Translations </h4>
            <ul>{translationList}</ul> 
        </section>
    )
}

export default ProfileTranslationHistory
