import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { useState, useEffect } from "react";
import "./Login.css";
import { storageSave } from "../../Utils/Storage";
import { storageRead } from "../../Utils/Storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

// Conditions for creating login
const usernameConfig = {
  required: true,
  minLength: 3,
};

// Login form using useForm
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  // LOCAL STATE
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // SIDE EFFECTS
  useEffect(() => {
    if (user !== null) {
      navigate("translation");
    }
  }, [user, navigate]);

  // EVENT HANDLERS
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  // RENDER FUNCTIONS
  // Error message to check is the user exist
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }

    if (errors.username.type === "minLength") {
      return <span>Username is too short (min 3)</span>;
    }
  })();

  return (
    <div className="container">
      <h2>Lost in translation</h2>
      <aside>
        <img id="img-logo" src="img/Logo-Hello.png" alt="logo-hello" />
      </aside>
      <form id="inputSection" onSubmit={handleSubmit(onSubmit)}>
        <fieldset id="fieldsetStyling">
          <input
            id="inputField"
            type="text"
            placeholder="What's your name?"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>
        <button id="continueBtn" type="submit" disabled={loading}>
          Continue
        </button>
        {loading && <p> Logging in...</p>}
        {apiError && <p> {apiError} </p>}
      </form>
    </div>
  );
};
export default LoginForm;
