import { FC, FormEvent } from 'react';
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import style from './login-page.module.css';
import { login } from '../../redux/actions/user-actions';
import { useFormHook } from '../../hooks/use-form-hook';
import { useSelector, useDispatch } from '../../hooks/store-hooks';
import {PATH_FORGOT_PASSWORD} from "../../utils/constants/path-constants";

const LoginPage: FC = () => {
  const dispatch = useDispatch();
  const { loginRequest } = useSelector((state) => state.user)
  const { values, handleChange } = useFormHook({ email: '', password: '' })

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(values))
  }

  return (
    <section className={`${style.login__container}`}>
      <div className={`${style.login__wrapper}`}>
        <h2 className={"text text_type_main-medium"}>Вход</h2>
        <form className={`${style.login__form}`} onSubmit={onSubmitForm}>
          <EmailInput
            placeholder={"E-mail"}
            name={"email"}
            value={values.email}
            extraClass={"mt-6"}
            onChange={handleChange}
          />
          <PasswordInput
            placeholder={"Пароль"}
            name={"password"}
            value={values.password}
            extraClass={"mt-6"}
            onChange={handleChange}
          />
          <Button
            extraClass={"mt-6 mb-20"}
            type={"primary"}
            size={"medium"}
            htmlType={'submit'}
          >
            {loginRequest ? <p className={`text text_type_main-small ${style.login__loading}`}>Входим...</p> : 'Войти'}
          </Button>
        </form>
        <div className={`${style.login__links}`}>
          <p className={"text text_type_main-default text_color_inactive mb-4"}>
            Вы - новый пользователь?&#8194;
            <Link to={"/register"} className={`${style.login__link} text text_color_accent`}>Зарегистрироваться</Link>
          </p>
          <p className={"text text_type_main-default text_color_inactive"}>Забыли пароль?&#8194;
            <Link to={PATH_FORGOT_PASSWORD} className={`${style.login__link} text text_color_accent`}>Восстановить пароль</Link>
          </p>
        </div>
      </div>
    </section>
  )
};

export default LoginPage