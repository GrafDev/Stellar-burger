import { FC, FormEvent, useEffect } from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import style from './forgot-password-page.module.css';
import { useSelector, useDispatch } from '../../hooks/store-hooks';
import { forgotPassword } from '../../redux/actions/reset-password-actions';
import { useFormHook } from '../../hooks/use-form-hook';
import {PATH_LOGIN, PATH_RESET_PASSWORD} from "../../utils/constants/path-constants";
import {colorAccent, inactiveMedium, textMedium, textSmall} from "../../utils/constants/text-style-constants";

const ForgotPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, handleChange } = useFormHook({ email: '' })
  const { verification, emailRequest } = useSelector(state => state.password)

  const requestNewPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(forgotPassword(values));
  }

  useEffect(() => {
    if (verification) {
      navigate(PATH_RESET_PASSWORD)
    }
  }, [verification]);

  return (
    <section className={`${style.forgotPassword__container}`}>
      <div className={`${style.forgotPassword__wrapper}`}>
        <h2 className={textMedium}>Восстановление пароля</h2>
        <form className={`${style.forgotPassword__form}`} onSubmit={requestNewPassword}>
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
            {emailRequest ? <p className={`${textSmall} ${style.forgotPassword__loading}`}>Отправляем...</p> : 'Восстановить'}
          </Button>
        </form>

        <div className={`${style.login__links}`}>
          <p className={`${inactiveMedium} mb-4`}>
            Вспомнили пароль?&#8194;
            <Link to={PATH_LOGIN} className={`${style.forgotPassword__link} ${colorAccent}`}>Войти</Link>
          </p>
        </div>
      </div>
    </section >
  )
}

export default ForgotPasswordPage