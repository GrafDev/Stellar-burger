import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios, { AxiosError } from 'axios';

import {
    AUTH_TOKEN_URL,
    AUTH_USER_URL,
    AUTH_LOGIN_URL,
    AUTH_LOGOUT_URL,
    AUTH_REGISTER_URL
} from "../../../utils/constants/outlink-constants";
import {deleteCookie, getCookie, setCookie} from "../../../utils/cookie";


export type TAuthUser = {
    name: string
    email: string
}

export type TAuthRegister = {
    name: string
    email: string
    password: string
}

export type TAuthState = {
    user: TAuthUser | null
    isLoading: boolean
    hasError: boolean
}

const initialState: TAuthState = {
    user: null,
    isLoading: false,
    hasError: false,
}




const saveTokens = (data: { accessToken: string; refreshToken: any; }) => {
    const _accessToken = data.accessToken.split('Bearer ')[1];
    const _refreshToken = data.refreshToken;
    console.log('set REFRESH Token to storage: ', _refreshToken)
    _refreshToken && localStorage.setItem('BurgerRefreshToken', _refreshToken);
    console.log('set ACCESS Token to cookie: ', _accessToken)
    _accessToken && setCookie('BurgerAccessToken', _accessToken)

}

const eraseTokens = () => {
    localStorage.removeItem('BurgerRefreshToken')
    deleteCookie('BurgerAccessToken')
}


export const setUser: any = createAsyncThunk(
    'auth/setUser',
    async (form: TAuthRegister, {rejectWithValue, dispatch}) => {
        const _accessToken = 'Bearer ' + getCookie('BurgerAccessToken')
        let res = await axios.patch(AUTH_USER_URL,
            {
                "name": form.name,
                "email": form.email,
                "password": form.password,
            },
            {
                headers: {
                    Authorization: _accessToken,
                }
            }
        )
        dispatch(reducerSetUser(res.data))

    }
)



// Функция для выполнения запроса авторизации
export const getUser: any = createAsyncThunk(
    'auth/getUser',
    async (form, {rejectWithValue, dispatch}) => {
        console.log('getUser: start ')

        const _accessToken = 'Bearer ' + getCookie('BurgerAccessToken')

        const _refreshToken = localStorage.getItem('BurgerRefreshToken')

        try {
            const response = await axios.get(AUTH_USER_URL, {
                headers: {
                    'Authorization': _accessToken
                }
            });
            console.log(response.data);
            dispatch(reducerSetUser(response.data));
        } catch (error) {
            if ((error as AxiosError).response?.status === 401) {
                // Обновление токена через refreshToken
                const refreshedToken = await axios.post( AUTH_TOKEN_URL, {
                    refreshToken: _refreshToken
                });
                // Повторный запрос авторизации с обновленным токеном
                const response = await axios.get(AUTH_USER_URL, {
                    headers: {
                        'Authorization': `Bearer ${refreshedToken.data.accessToken}`
                    }
                });
                console.log(response.data);
                saveTokens(response.data);
                dispatch(reducerSetUser(response.data));
            } else {
                console.error(error);
                rejectWithValue(error);
            }
        }
    }
);


export const registerUser: any = createAsyncThunk(
    'auth/registerUser',
    async (form: TAuthRegister, {rejectWithValue, dispatch}) => {

        const res = await axios.post(AUTH_REGISTER_URL,
            {
                "email": form.email,
                "password": form.password,
                "name": form.name,
            }
        )

        dispatch(reducerSetUser(res.data))
        saveTokens(res.data)
        return res.data
    }
)

export const loginUser: any = createAsyncThunk(
    'auth/loginUser',

    async (form: TAuthRegister, {rejectWithValue, dispatch}) => {

        const res = await axios.post(AUTH_LOGIN_URL,
            {
                "email": form.email,
                "password": form.password,
            })
        // console.log('login res.data: ', res.data)
        saveTokens(res.data)
        dispatch(reducerSetUser(res.data))
        return res.data
    }
)


export const logoutUser:any = createAsyncThunk(
    'auth/logoutUser',
    async (form: TAuthRegister, {rejectWithValue, dispatch}) => {
        const refreshToken = localStorage.getItem('BurgerRefreshToken')
        const res = await axios.post(AUTH_LOGOUT_URL,
            {
                token: refreshToken
            })
        // console.log('res.data-logout:', res.data)
        eraseTokens()
        dispatch(reducerCleanUser(res.data))
        return res.data
    }
)


export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        reducerSetUser: (state, action) => {
            state.user = action.payload.user;
        },

        reducerCleanUser: (state, action) => {
            state.user = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
                state.hasError = false
                console.log('getUser: pending')
            })
            .addCase(getUser.fulfilled, (state) => {
                state.isLoading = false
                state.hasError = false
                console.log('getUser: fulfilled')
            })
            .addCase(getUser.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
                console.log('getUser: rejected')
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
                state.hasError = false
                console.log('registerUser: pending')
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false
                state.hasError = false
                console.log('registerUser: fulfilled')
            })
            .addCase(registerUser.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
                console.log('registerUser: rejected')

            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.hasError = false
                console.log('loginUser: pending')
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.isLoading = false
                state.hasError = false
                console.log('loginUser: fulfilled')
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
                console.log('loginUser: rejected')
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true
                console.log('logoutUser: pending')
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false
                state.hasError = false
                console.log('logoutUser: fulfilled')
            })
            .addCase(logoutUser.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
                console.log('logoutUser: rejected')
            })
            .addDefaultCase(() => {
            })

    }

})

export const {reducerSetUser, reducerCleanUser} = authSlice.actions
export default authSlice.reducer
