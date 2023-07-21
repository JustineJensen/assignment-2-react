import { createHeaders } from "./index";
import {userId} from "./"

export const apiUrl = process.env.REACT_APP_API_URL;
// add translations
export const addTranslation = async (user, translation) => {
  const updatedTranslations = user.translations
  updatedTranslations.push(translation)
  const limitedTranslations = updatedTranslations.slice(-10); // Limit to the last 10 translations

  const response = await fetch(`${apiUrl}/${user.id}`, {
    method: "PATCH",
    headers: createHeaders(),
    body: JSON.stringify({
      translations: limitedTranslations,
    }),
  });

  if (!response.ok) {
    throw new Error("Could not update translation");
  }
  const result = await response.json();
  console.log(result);

  const updatedUser = {
    ...user,
    translations: limitedTranslations,
  };

 // setUser(updatedUser);  
};


export const deleteTranslations = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: 'PATCH',
      headers: createHeaders(), // headers will include the api key we have
      body: JSON.stringify({
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not clear translations");
    }
    
    const result = await response.json();
    // return null if there is no error and return results if there is error
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};


export default deleteTranslations;
