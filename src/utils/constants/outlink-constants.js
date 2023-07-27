const BASE_URL = 'norma.nomoreparties.space'

export const MAIN_URL = `https://${BASE_URL}/api`
export const DATA_URL = `${MAIN_URL}/ingredients`;

export const PASSWORD_RESET_URL=`${MAIN_URL}/password-reset`


export const PASSWORD_RESET_RESET_URL=`${MAIN_URL}/password-reset/reset`

export const USER_REGISTRATION_URL= `${MAIN_URL}/auth/register` // эндпоинт регистрации
export const USER_LOGIN_URL= `${MAIN_URL}/auth/login`// эндпоинт авторизации

export const AUTH_TOKEN_URL = `${MAIN_URL}/auth/token` // эндпоинт обновления токена.


export const USER_AUTH_URL = `${MAIN_URL}/auth/user` // эндпоинт получения и обновления данных пользователя.
export const USER_LOGOUT_URL = `${MAIN_URL}/auth/logout` // эндпоинт для выхода из системы.

