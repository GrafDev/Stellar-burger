import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {
    AUTH_TOKEN_URL,
    AUTH_USER_URL,
    AUTH_LOGIN_URL,
    AUTH_LOGOUT_URL,
    AUTH_REGISTER_URL
} from "../../../utils/constants/outlink-constants";
import {deleteCookie, getCookie, setCookie} from "../../../utils/cookie";
import checkToken from "../../../utils/authorization/check-token";


const initialState = {
    user: {
        email: null,
        name: null,

    },
    isLoading: false,
    hasError: false,
}


const saveTokens = (data) => {
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


export const setUser = createAsyncThunk(
    'auth/setUser',
    async (form, {rejectWithValue, dispatch}) => {
        const _user = form.user
        const _accessToken = 'Bearer ' + getCookie('BurgerAccessToken')
        let res = await axios.patch(AUTH_USER_URL,
            {
                "name": _user.name,
                "email": _user.email,
                "password": _user.password,
            },
            {
                headers: {
                    Authorization: _accessToken,
                }
            }
        )
        dispatch(reducer_setUser(res.data))

    }
)


export const getUser = createAsyncThunk(
    'auth/getUser',
    async (form, {rejectWithValue, dispatch}) => {
        console.log('getUser: start ')

        const _accessToken = 'Bearer ' + getCookie('BurgerAccessToken')

        if (!checkToken(_accessToken)) {
            const _refreshToken = localStorage.getItem('BurgerRefreshToken')
            const res = await axios.post(AUTH_TOKEN_URL,
                {

                    token: _refreshToken
                }
            )
            saveTokens(res.data)
        }
        let res = await axios.get(AUTH_USER_URL,
            {
                headers: {
                    authorization: _accessToken,
                }
            }
        )

        dispatch(reducer_setUser(res.data))
    }
)


export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (form, {rejectWithValue, dispatch}) => {

        const res = await axios.post(AUTH_REGISTER_URL,
            {
                "email": form.email,
                "password": form.password,
                "name": form.name,
            }
        )
        saveTokens(res.data)
        dispatch(reducer_setUser(res.data))
        return res.data
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (form, {rejectWithValue, dispatch}) => {

        const res = await axios.post(AUTH_LOGIN_URL,
            {
                "email": form.email,
                "password": form.password,
            })
        // console.log('login res.data: ', res.data)
        saveTokens(res.data)
        dispatch(reducer_setUser(res.data))
        return res.data
    }
)


export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (form, {rejectWithValue, dispatch}) => {
        const refreshToken = localStorage.getItem('BurgerRefreshToken')
        const res = await axios.post(AUTH_LOGOUT_URL,
            {
                token: refreshToken
            })
        // console.log('res.data-logout:', res.data)
        eraseTokens()
        dispatch(reducer_cleanUser(res.data))
        return res.data
    }
)


export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        reducer_setUser: (state, action) => {
            state.user = action.payload.user;
        },

        reducer_cleanUser: (state, action) => {
            state.user.name = null;
            state.user.email = null;
        }
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
                console.log('logoutUser: pending')
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false
                state.hasError = false
                console.log('logoutUser: fulfilled')
            })
            .addCase(logoutUser.rejected, (state) => {
                state.isLoading = false
                state.hasError = false
                console.log('logoutUser: rejected')
            })
            .addDefaultCase(() => {
            })

    }

})

export const {reducer_setUser, reducer_cleanUser} = authSlice.actions
export default authSlice.reducer
