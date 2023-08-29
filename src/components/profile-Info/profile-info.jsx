import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'


import styles from './profile-info.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getUserSelector} from "../../redux/features/auth/auth-selectors";
import useForm from "../../hooks/use-form";
import {reducer_setUser} from "../../redux/features/auth/authSlice";

const ProfileInfo = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUserSelector)

  const initialForm = {
    name: user?.name || '',
    email: user?.email || '',
    password: '',
  }

  const { form, handleForm, resetForm } = useForm(initialForm)

  const isEdit = JSON.stringify(initialForm) !== JSON.stringify(form)

  const submitForm = (e) => {
    e.preventDefault()

    dispatch(reducer_setUser(form))
  }

  return (
    <form className={styles.wrapper} onSubmit={submitForm}>
      <Input
        type="text"
        placeholder="Имя"
        onChange={handleForm}
        value={form.name}
        name="name"
        error={false}
        errorText="Ошибка"
        size="default"
        icon="EditIcon"
      />

      <EmailInput
        name="email"
        value={form.email}
        onChange={handleForm}
        placeholder="E-mail"
        isIcon
      />

      <PasswordInput
        name={'password'}
        value={form.password}
        onChange={handleForm}
        icon="EditIcon"
      />

      {isEdit && (
        <div className={styles.buttons}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={resetForm}
          >
            Отмена
          </Button>

          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  )
}

export default React.memo(ProfileInfo)
