import React, {FC} from 'react'
import {NavigateFunction, useNavigate} from 'react-router-dom'
import {Button} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './authorization-button.module.css'


type TButtonSettings = {
    title: string,
    buttonName: string,
    path: string,
}
const AuthorizationButton: FC<TButtonSettings> = ({title, buttonName, path}: TButtonSettings) => {

    const navigate: NavigateFunction = useNavigate()

    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{title}</p>

            <Button
                htmlType="button"
                type="secondary"
                size="large"
                extraClass={styles.button}
                onClick={() => navigate(path)}
            >
                {buttonName}
            </Button>
        </div>
    )
}

export default AuthorizationButton;
