import {FORGOT_PASSWORD_LINK, REGISTER_LINK} from "../../utils/constants/router-link-constants";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import AuthorizationButton from "../../components/authorization-button/authorization-button";
import {useDispatch} from "react-redux";
import React, {FC, FormEvent, useCallback} from "react";
import { loginUser} from "../../redux/features/auth/authSlice";
import useForm from "../../hooks/use-form";

const LoginPage:FC = () => {


    const dispatch = useDispatch()


    const {form, handleForm} = useForm({email: '', password: ''})

    const submitForm = useCallback(
        (e:FormEvent) => {
            e.preventDefault();
            dispatch(loginUser(form)) //TODO: Make sense of ANY
        },
        [dispatch, form]
    )

    return (
        <main className="container auth">
            <h3 className="auth__title">Вход</h3>

            <form className="auth__form" onSubmit={submitForm}>
                <EmailInput
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleForm}
                    autoFocus
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
                    disabled={!form.email || !form.password}
                >
                    Войти
                </Button>
            </form>

            <div className="auth__links">
                <AuthorizationButton
                    title="Вы — новый пользователь?"
                    buttonName="Зарегистрироваться"
                    path={REGISTER_LINK}
                />
                <AuthorizationButton
                    title="Забыли пароль?"
                    buttonName="Восстановить пароль"
                    path={FORGOT_PASSWORD_LINK}
                />
            </div>
        </main>
    )
}



export default LoginPage;



