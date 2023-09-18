import {ChangeEvent, FC, useState} from "react";



const useForms = <T>(iniForm:T) => {
    const [form, setForm] = useState(iniForm)

    const handleForm = (event:ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = event.target
        setForm(prevForm => ({ ...prevForm, [name]: value }))
    }

    const resetForm = () => setForm(iniForm)

    return { form, handleForm, setForm, resetForm }
}

export default useForms;