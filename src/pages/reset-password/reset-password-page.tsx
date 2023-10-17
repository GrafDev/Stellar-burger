import { FC, FormEvent, useEffect } from 'react';
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import style from './reset-password-page.module.css'
import { resetPasswordActions } from '../../redux/actions/reset-password-actions';
import { useFormHook } from '../../hooks/use-form-hook';
import { useSelector, useDispatch } from '../../hooks/store-hooks';
import {PATH_FORGOT_PASSWORD, PATH_LOGIN} from "../../utils/constants/path-constants";
import {colorAccent, inactiveMedium, textMedium} from "../../utils/constants/text-style-constants";

const ResetPasswordPage:FC = () => {
  const dispatch = useDispatch();
  const { verification } = useSelector(state => state.password);
  const navigate = useNavigate();
  const { values, handleChange } = useFormHook({ token: "", password: "" })

  const setNewPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(resetPasswordActions(values));
    navigate(PATH_LOGIN)
  }

  useEffect(() => {
    if (!verification) {
      navigate(PATH_FORGOT_PASSWORD)
    }
  }, [verification]);

  return (
    <section className={`${style.resetPassword__container}`}>
      <div className={`${style.resetPassword__wrapper}`}>
        <h2 className={textMedium}>Восстановление пароля</h2>
        <form className={`${style.resetPassword__form}`} onSubmit={setNewPassword}>
          <PasswordInput
            extraClass={"mt-6"}
            placeholder={"Введите новый пароль"}
            value={values.password}
            name={'password'}
            onChange={handleChange}
            required
          />
          <Input
            extraClass={"mt-6"}
            placeholder={"Введите код из письма"}
            value={values.token}
            name={'token'}
            onChange={handleChange}
            required
          />
          <Button
            extraClass={"mt-6 mb-20"}
            type={"primary"}
            htmlType={'submit'}
            size={"medium"}>
            Сохранить
          </Button>
        </form>
        <div className={`${style.login__links}`}>
          <p className={`${inactiveMedium} mb-4`}>
            Вспомнили пароль?&#8194;
            <Link to={"/login"} className={`${style.resetPassword__link} ${colorAccent}`}>Войти</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ResetPasswordPage