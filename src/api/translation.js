import { createHeaders } from "./index";

export const apiUrl = process.env.REACT_APP_API_URL;
// add translations
export const addTranslation = async (user, translation) => {
  console.log("User", user);
  console.log(user.translations); //added code
  console.log("translation:", translation);
  const response = await fetch(`${apiUrl}/${user.id}`, {
    method: "PATCH", // the translations
    headers: createHeaders(),
    body: JSON.stringify({
      // username: user.username,
      translations: [...user.translations, translation], //Istället för [...user.translations, translation] ha userTranslations (från parameter) 4.
    }),
  });

  if (!response.ok) {
    throw new Error("Could not update translation");
  }
  const result = await response.json();
  console.log(result)
  // return [ null, result ]
};

export const deleteTranslations = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(), // headers will include the api key we have
      body: JSON.stringify({
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not clear translations");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};


export default deleteTranslations;
