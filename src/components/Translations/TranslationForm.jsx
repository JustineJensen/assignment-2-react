import { useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";
import { addTranslation } from "../../api/translation";

const TranslationForm = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useUser();

  // State -> [userTranslations, setUserTranslations] 1.

  // useEffect(() => HÄMTAR TRANSLATIONS FRÅN API -> setUserTranslations(result[0].translations)) 2.

  const onSubmit = (data) => {
    // const [error, result] = addTranslation(user, data.translationInput);
    addTranslation(user, data.translationInput)

    // addTranslation(user, data.translationInput, userTranslations)  3.
    

    // console.log('Result: ', result)
    // console.log('data:' , data)
  };


return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <fieldset>
        <label htmlFor="translation-input"> Translation: </label>
        <input
            type="text"
            {...register("translationInput")}
                placeholder="What do you want to translate?"
        />
    </fieldset>

      {/* Event handler -> send translation to API & display the translation */}
    <button id="" type="submit">
        Translate
    </button>
    </form>
);
};

export default TranslationForm;
