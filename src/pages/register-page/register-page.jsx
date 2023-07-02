import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {LOGIN_LINK} from "../../utils/constants/router-link-constants";
import AuthorizationButton from "../../components/authorization-button/authorization-button";
import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import {authUser} from "../../redux/features/user/userSlice";
// Styles are in the main index.css file


const RegisterPage = () => {

    const dispatch = useDispatch()


    const [form,setForm]=useState({
        name: null,
        email: null,
        token:null,
        password: null,
    })
    const onChange=e=>{
        setForm({...form,[e.target.name]: e.target.value})
    }

    const submitForm = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(authUser(form))
        },
        [dispatch,form]
    )




    return (
        <div className='container auth'>
            <h3 className="auth__title">Регистрация</h3>
            <form className="auth__form" onSubmit={submitForm}>
                <Input
                    type="text"
                    placeholder="Имя"
                    onChange={onChange}
                    value={form.name}
                    name="name"
                    error={false}
                    errorText="Ошибка"
                    size="default"
                    autoFocus
                />

                <EmailInput
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                />

                <PasswordInput
                    onChange={onChange}
                    value={form.password}
                    name={'password'}
                />

                <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    disabled={!form.email || !form.name || !form.password}
                >
                    Зарегистрироваться
                </Button>
            </form>

            <div className="auth__links">
                <AuthorizationButton
                    title="Уже зарегистрированы?"
                    buttonName="Войти"
                    path={LOGIN_LINK}
                />
            </div>
        </div>
    )
}
export default RegisterPage;

