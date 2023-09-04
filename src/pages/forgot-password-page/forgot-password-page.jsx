import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import AuthorizationButton from "../../components/authorization-button/authorization-button";
import {LOGIN_LINK, RESET_PASSWORD_LINK} from "../../utils/constants/router-link-constants";
import useForm from "../../hooks/use-form";
import {forgotPassword} from "../../utils/authorization/forgot-password";
import {useNavigate} from "react-router-dom";
import {useCallback, useEffect} from "react";

// Styles are in the main index.css file


const ForgotPasswordPage = () => {
    const navigate = useNavigate()
    const {form, handleForm} = useForm({
            email: ''
        })




    const submitForm = useCallback((e) => {
        e.preventDefault()
        forgotPassword(form)
            .then(() =>
                navigate(RESET_PASSWORD_LINK, {
                    state: {resetPassword: true},
                }),
            )
            .catch(() => {
                throw new Error('Error on submitting password-reset')
            })
    }, [navigate, form])


    return (
        <main className="container auth">
            <h3 className="auth__title">Восстановление пароля</h3>

            <form className="auth__form" onSubmit={submitForm}>
                <EmailInput
                    name="email"
                    placeholder="Укажите e-mail"
                    value={form.email}
                    onChange={handleForm}
                    autoFocus
                />

                <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    disabled={!form.email}
                >
                    Восстановить
                </Button>
            </form>

            <div className="auth__links">
                <AuthorizationButton
                    title="Вспомнили пароль?"
                    buttonName="Войти"
                    path={LOGIN_LINK}
                />
            </div>
        </main>
    )
}
export default ForgotPasswordPage;