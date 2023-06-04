import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import AuthorizationButton from "../../components/authorization-button/authorization-button";
import useForm from "../../hooks/useForm";
import {LOGIN_LINK} from "../../utils/constants/router-link-constants";

const ResetPasswordPage=()=>{

    const { form, handleForm } = useForm({
        password: '',
        token: '',
    })

    const submitForm =
        (e) => {
            e.preventDefault()

        }

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