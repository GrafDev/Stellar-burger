import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import { PROFILE_LINK} from "../../utils/constants/router-link-constants";
import AuthorizationButton from "../../components/authorization-button/authorization-button";
import {useDispatch} from "react-redux";
import React, {FormEvent, useCallback} from "react";
import {registerUser} from "../../redux/features/auth/authSlice";
import useForm from "../../hooks/use-form";


const RegisterPage = () => {

    const dispatch = useDispatch()


    const { form, handleForm } = useForm({
        name: '',
        email: '',
        password: '',
    })


    const submitForm = useCallback(
        (e:FormEvent) => {
            e.preventDefault();
           dispatch(registerUser(form))
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
                    onChange={handleForm}
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
                    onChange={handleForm}
                />

                <PasswordInput
                    onChange={handleForm}
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
                    path={PROFILE_LINK}
                />
            </div>
        </div>
    )
}




export default RegisterPage;
