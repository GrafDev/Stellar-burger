const BASE_URL = 'norma.nomoreparties.space'

export const MAIN_URL = `https://${BASE_URL}/api`
export const INGREDIENTS_URL = `${MAIN_URL}/ingredients`;

export const PASSWORD_RESET_URL=`${MAIN_URL}/password-reset`


export const PASSWORD_RESET_RESET_URL=`${MAIN_URL}/password-reset/reset`

export const AUTH_REGISTER_URL= `${MAIN_URL}/auth/register` // эндпоинт регистрации
export const AUTH_LOGIN_URL= `${MAIN_URL}/auth/login`// эндпоинт авторизации

export const AUTH_TOKEN_URL = `${MAIN_URL}/auth/token` // эндпоинт обновления токена.


export const AUTH_USER_URL = `${MAIN_URL}/auth/user` // эндпоинт получения и обновления данных пользователя.
export const AUTH_LOGOUT_URL = `${MAIN_URL}/auth/logout` // эндпоинт для выхода из системы.

export const PROFILE_LINK = '/profile'

export const INGREDIENT_LINK = '/ingredients'

export const INGREDIENT_PAGE_LINK = `${INGREDIENT_LINK}/:id`
