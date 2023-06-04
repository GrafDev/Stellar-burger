import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './authorization-button.module.css'

const AuthorizationButton= ({ title, buttonName, path }) => {
    const navigate = useNavigate()

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
