import withAuth from "../hoc/withAuth"

const TranslationPage = () => { 
<input type="text" placeholder="Hello" />


return (
    <h2>Translations</h2>
   )
}
export default withAuth(TranslationPage)