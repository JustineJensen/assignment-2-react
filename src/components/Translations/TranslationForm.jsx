import React from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";
import { addTranslation } from "../../api/translation";
import { useState } from "react";
import "./Translations.css";

const TranslationForm = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useUser();
  const [displayImages, setDisplayImages] = useState([]);

  const onSubmit = (data) => {
    addTranslation(user, data.translationInput);

    let translatedImages = [];
    let inputText = data.translationInput.toLowerCase().split("");
    for (let i = 0; i < inputText.length; i++) {
      translatedImages.push({
        key: i,
        src: `/img/${inputText[i]}.png`,
        altText: inputText[i],
      });
    }
    setDisplayImages(translatedImages);
  };

  const translationList = displayImages.map((img, index) => (
    <img key={img.key} src={img.src} alt={img.altText}></img>
  ));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          {/* <label htmlFor="translation-input"> Translation: </label> */}
          <input
            id="inputFieldTranslation"
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
      <div id="outputField"> {translationList}</div>
    </>
  );
};

export default TranslationForm;
