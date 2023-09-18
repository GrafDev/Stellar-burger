import {
    Button,
    EmailInput,
    Input,
    PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import React, { FC, useState} from 'react'


import styles from './profile-info.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getAuthUser} from "../../redux/features/auth/auth-selectors";
import useForm from "../../hooks/use-form";
import {setUser, TAuthRegister} from "../../redux/features/auth/authSlice";
import {FormEvent} from "react";

const ProfileInfo:FC = () => {
    const dispatch:any = useDispatch()
    const [isSaved, setIsSaved] = useState<boolean>(false)
    const user:TAuthRegister = useSelector(getAuthUser)

    const initialForm:TAuthRegister = {

        name: user?.name || '',
        email: user?.email || '',
        password: '',

    }

    const {form, handleForm, resetForm} = useForm<TAuthRegister>(initialForm)

    const isEdit :boolean= JSON.stringify(initialForm) !== JSON.stringify(form)

    const submitForm = (e:FormEvent):void => {
        e.preventDefault()

        console.log(form, 'form')
        let _form:TAuthRegister = {
                ...form,
        }

        dispatch(setUser(_form))
        setIsSaved(true)

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
            <div className={styles.isSaved}>
                {(isSaved && !isEdit) ? <p>Данные успешно изменены</p> : ''}
            </div>
        </form>
    )
}


export default React.memo(ProfileInfo)
