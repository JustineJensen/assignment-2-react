import {useForm} from "react-hook-form"

const TranslationForm = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="translation-notes"> Translation: </label>
                <input type="text" {...register('translationNotes') }  placeholder="What do you want to translate?" />
            </fieldset>

            <button type="submit">Translate</button>

        </form>
    )
}

export default TranslationForm