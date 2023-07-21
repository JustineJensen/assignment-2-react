import withAuth from "../hoc/withAuth";
import TranslationForm from "../components/Translations/TranslationForm";
import "./Translations.css";
import TranslationButton from "../components/Translations/TranslationButton";

const TranslationPage = () => {
  return (
    <>
      <h2>Translations</h2>
      <section id="translation-input">
        <TranslationForm />
      </section>
    </>
  );
};
export default withAuth(TranslationPage);
