import { FC, FormEvent, useEffect } from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import style from './forgot-password.module.css';
import { useSelector, useDispatch } from '../../hooks/store-hooks';
import { forgotPassword } from '../../redux/actions/reset-password-actions';
import { useFormHook } from '../../hooks/use-form-hook';

const ForgotPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, handleChange } = useFormHook({ email: '' })
  const { verification, emailRequest } = useSelector(state => state.password)

  const reqestNewPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(forgotPassword(values));
  }

  useEffect(() => {
    if (verification) {
      navigate('/reset-password')
    }
  }, [verification]);

  return (
    <section className={`${style.forgotPassword__container}`}>
      <div className={`${style.forgotPassword__wrapper}`}>
        <h2 className={"text text_type_main-medium"}>Восстановление пароля</h2>
        <form className={`${style.forgotPassword__form}`} onSubmit={reqestNewPassword}>
          <Input
            placeholder={"Укажите e-mail"}
            type={"email"}
            name={'email'}
            extraClass={"mt-6"}
            onChange={handleChange}
            value={values.email}
            required
          />
          <Button
            extraClass={"mt-6 mb-20"}
            type={"primary"}
            htmlType={'submit'}>
            {emailRequest ? <p className={`text text_type_main-small ${style.forgotPassword__loading}`}>Отправляем...</p> : 'Восстановить'}
          </Button>
        </form>

        <div className={`${style.login__links}`}>
          <p className={"text text_type_main-default text_color_inactive mb-4"}>
            Вспомнили пароль?&#8194;
            <Link to={"/login"} className={`${style.forgotPassword__link} text text_color_accent`}>Войти</Link>
          </p>
        </div>
      </div>
    </section >
  )
}

export default ForgotPassword