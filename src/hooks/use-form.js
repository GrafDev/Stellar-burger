import {useState} from "react";

const useForms = (iniForm) => {
    const [form, setForm] = useState(iniForm)

    const handleForm = (event) => {
        const { name, value } = event.target
        setForm(prevForm => ({ ...prevForm, [name]: value }))
    }

    const resetForm = () => setForm(iniForm)

    return { form, handleForm, setForm, resetForm }
}

export default useForms;