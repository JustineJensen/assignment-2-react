import {useForm} from 'react-hook-form'

// Conditions for creating login
const usernameConfig ={
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

    const onSubmit = (data) =>{
        //TranslationPage
        
        console.log(data)
    }

    
    // Error message 
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
            <fieldset>
                <label htmlFor="username">Username: </label>
                <input 
                type="text"
                placeholder ="What's your name?"
                 { ...register("username",usernameConfig)} 
                 />
                 { errorMessage }
            </fieldset>

            <button type="submit">Continue</button>
            
            
         </form>
        </>
    )

}
export default LoginForm