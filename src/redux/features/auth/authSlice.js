import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {
    USER_AUTH_URL,
    USER_LOGIN_URL,
    USER_LOGOUT_URL,
    USER_REGISTRATION_URL
} from "../../../utils/constants/outlink-constants";
import {deleteCookie, getCookie, setCookie} from "../../../utils/cookie";


const initialState = {
    user: {
        name: null,
        email: null,
    },
    isLoading: false,
    hasError: false,
}

export const testUser = createAsyncThunk(
    'auth/getUser',
    async (form, {rejectedWithValue, dispatch}) => {
        const _accessToken ='Bearer ' + getCookie('BurgerAccessToken');

        try {
            const res = await axios.get(USER_AUTH_URL,
                {Authorization:_accessToken}
            )
            console.log('from cooke', res.data,'\n', 'token: ',_accessToken)
        } catch (error) {
            console.log('catch', error)

        }
        console.log('token: ',_accessToken)

    }
)

export const lookUser = createAsyncThunk(
    'auth/lookUser',
    async (form, {rejectedWithValue, dispatch}) => {
        const _accessToken = getCookie('BurgerAccessToken');
            console.log('access Token: ', _accessToken)
            const _refreshToken = localStorage.getItem('BurgerRefreshToken');
            console.log('refresh Token', _refreshToken)
    }
)

export const getUser = createAsyncThunk(
    'auth/getUser',
    async (form, {rejectedWithValue, dispatch}) => {
        const _accessToken = 'Bearer ' + getCookie('BurgerAccessToken');
        try {
            const res = await axios.get(USER_AUTH_URL,
                {Authorization:_accessToken}
            )
            console.log('from cooke try', res.data)
            dispatch(reducer_setUser(res.data))
        } catch (error) {
            const _refreshToken = localStorage.getItem('BurgerRefreshToken');
            const res = await axios.patch(USER_AUTH_URL,
                {Authorization: 'Bearer '.concat(_refreshToken)}
            )
            console.log('catch', res.data)

            dispatch(reducer_setUser(res.data))
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (form, {rejectWithValue, dispatch}) => {

        const res = await axios.post(USER_REGISTRATION_URL,
            {
                "email": form.email,
                "password": form.password,
                "name": form.name,
            }
        )
        // console.log('res.data: ', res.data)
        dispatch(reducer_setUser(res.data))
        return res.data
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (form, {rejectWithValue, dispatch}) => {

        const res = await axios.post(USER_LOGIN_URL,
            {
                "email": form.email,
                "password": form.password,
            })
        console.log('login res.data: ', res.data)
        dispatch(reducer_setUser(res.data))
        return res.data
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (form, {rejectWithValue, dispatch}) => {
        const refreshToken = localStorage.getItem('BurgerRefreshToken')
        const res = await axios.post(USER_LOGOUT_URL,
            {
                token: refreshToken
            })
        // console.log('res.data-logout:', res.data)
        dispatch(reducer_cleanUser(res.data))
        return res.data
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        reducer_setUser: (state, action) => {
            state.user.name = action.payload.user.name;
            state.user.email = action.payload.user.email;
            const _accessToken = action.payload.accessToken.split('Bearer ')[1];
            const _refreshToken = action.payload.refreshToken;
            console.log('set REFRESH Token to storage: ', _refreshToken)
            localStorage.setItem('BurgerRefreshToken', _refreshToken);
            console.log('set ACCESS Token to cookie: ', _accessToken)
            setCookie('BurgerAccessToken', _accessToken)
        },
        reducer_cleanUser: (state, action) => {
            state.user.name = null;
            state.user.email = null;
            localStorage.removeItem('BurgerRefreshToken')
            deleteCookie('BurgerAccessToken')
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
