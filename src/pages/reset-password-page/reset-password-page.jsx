import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import AuthorizationButton from "../../components/authorization-button/authorization-button";
import useForm from "../../hooks/use-form";
import {LOGIN_LINK} from "../../utils/constants/router-link-constants";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {resetPassword} from "../../utils/authorization/reset-password";

const ResetPasswordPage=()=>{
    const navigate = useNavigate()


    const { form, handleForm } = useForm({
        password: '',
        token: '',
    })

    const submitForm = useCallback(
        (e) => {
            e.preventDefault()

            resetPassword(form)
                .then((r) => {
                    console.log(r.message)
                    return navigate(LOGIN_LINK)
                })
                .catch(() => {
                    throw new Error('Error on submitting ResetPasswordPage')
                })
        },
        [form, navigate],
    )


    return (
        <main className="container auth">
            <h3 className="auth__title">Восстановление пароля</h3>

            <form className="auth__form" onSubmit={submitForm}>
                <PasswordInput
                    name={'password'}
                    value={form.password}
                    onChange={handleForm}
                    placeholder="Введите новый пароль"
                    autoFocus
                />

                <Input
                    name="token"
                    value={form.token}
                    onChange={handleForm}
                    type="text"
                    placeholder="Введите код из письма"
                    error={false}
                    errorText="Ошибка"
                    size="default"
                />

                <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    disabled={!form.password || !form.token}
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
export default ResetPasswordPage;