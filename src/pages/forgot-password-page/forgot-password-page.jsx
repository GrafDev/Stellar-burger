import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import AuthorizationButton from "../../components/authorization-button/authorization-button";
import {LOGIN_LINK} from "../../utils/constants/router-link-constants";
import useForm from "../../hooks/useForm";

const ForgotPasswordPage=()=>{

    const { form, handleForm } = useForm({ email: '' })

    const submitForm = (e) => {
            e.preventDefault()
        }


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