import {useForm} from 'react-hook-form'
import {loginUser}from '../../api/user'
import { useState } from 'react'
import './Login.css'

// Conditions for creating login
const usernameConfig = {
    required: true,
    minLength: 3
}

// Login form using useForm
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const [ loading, setLoading ] = useState(false)

    const onSubmit = async({ username }) => {
        setLoading(true)
        const [error, user] = await loginUser(username)
        console.log('Error: ', error);
        console.log('User: ', user);
        setLoading(false)
    }

    
    // Error message to check is the user exist
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }
         if (errors.username.type ==='required') {
            return <span>Username is required</span>
         }

         if (errors.username.type ==='minLength') {
            return <span>Username is too short (min 3)</span>
         }
    })()

    return (
        <>
        <h2>Lost in translation</h2> 
        <h5>Get started</h5>
         <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset id="fieldsetStyling">
                <label htmlFor="username">Username: </label>
                <input 
                type="text"
                placeholder ="What's your name?"
                 { ...register("username: ", usernameConfig)}
                 />
                <span className="material-symbols-outlined">
                    arrow_circle_right
                </span>
                 { errorMessage }
            </fieldset>

            <button type="submit" disabled = { loading }>Continue</button>
            { loading && <p> Logging in...</p> }
         </form>
        </>
    )

}
export default LoginForm