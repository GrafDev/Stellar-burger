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
        // token: '',
    },
    isLoading: false,
    hasError: false,
}


export const getUser = createAsyncThunk(
    'auth/getUser',
    async (form,{rejectWithValue,dispatch}) => {
        const res = await axios.get(USER_AUTH_URL,
            {Authorization:'Bearer '.concat(getCookie('accessToken') || ''),}
        )

        console.log('res.data: ', res.data)
        //dispatch(setUser(res.data))
        return res.data
    }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (form,{rejectWithValue,dispatch}) => {

        const res = await axios.post(USER_REGISTRATION_URL,
            {
                "email": form.email,
                "password": form.password,
                "name": form.name,
            }
        )
        console.log('res.data: ', res.data)
        dispatch(setUser(res.data))
        return res.data
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (form,{rejectWithValue,dispatch}) => {

        const res = await axios.post(USER_LOGIN_URL,
            {
                "email": form.email,
                "password": form.password,
            })
        console.log('res.data-login:', res.data)
        dispatch(setUser(res.data))
        return res.data
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (form,{rejectWithValue,dispatch}) => {
        const refreshToken = localStorage.getItem('refreshToken')
        const res = await axios.post(USER_LOGOUT_URL,
            {
                token: refreshToken
            })
        console.log('res.data-logout:', res.data)
        dispatch(cleanUser(res.data))
        return res.data
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setUser: (state, action) => {
            console.log('_user',action.payload.user)
            state.user.name = action.payload.user.name;
            state.user.email =action.payload.user.email;
            const accessToken = action.payload.accessToken;
            console.log('access Token', accessToken)
            localStorage.setItem('refreshToken',action.payload.refreshToken);
            setCookie('accessToken', accessToken.split('Bearer ')[1])
        },
        cleanUser: (state, action) => {
            state.user.name = null;
            state.user.email = null;
            localStorage.removeItem('refreshToken')
            deleteCookie('accessToken')
        }
    },
    extraReducers: builder => {
        builder
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
                state.isLoading = true
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
                console.log('logoutUser: rejected')
            })
            .addDefaultCase(() => {
            })

    }

})

export const {setUser, cleanUser} = authSlice.actions
export default authSlice.reducer
