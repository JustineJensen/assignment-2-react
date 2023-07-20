import React from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";
import { addTranslation } from "../../api/translation";
import { useState } from "react";

const TranslationForm = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useUser();
  const [translate, setTranslate] = useState();

  const onSubmit = (data) => {
    addTranslation(user, data.translationInput);

    let translatedImages = [];
    let inputText = data.translationInput.toLowerCase().split("");
    for (let i = 0; i < inputText.length; i++) {
      translatedImages.push({
        key: i,
        images: `/signs/${inputText[i]}.png`,
        altText: inputText[i],
      });
    }
  };

  return (
    <>
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
        <button id="translate-btn" type="submit">
          Translate
        </button>
      </form>
      <div id="outputField"></div>
    </>
  );
};

export default TranslationForm;
