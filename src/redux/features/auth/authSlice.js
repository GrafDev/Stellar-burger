import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {USER_LOGIN_URL, USER_REGISTRATION_URL} from "../../../utils/constants/outlink-constants";
import {setCookie} from "../../../utils/cookie";


const initialState = {
    user: {
        name: '',
        email: '',
        // token: '',
    },
    isLoading: true,
    hasError: false,
}

export const registerUser = createAsyncThunk(
    'auth/rescueUser',
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
            setCookie('accessToken', accessToken.split('Bearer ')[1])
        },
        cleanUser: (state, action) => {
            state.user.name = null;
            state.user.email = null;
            state.user.token = null;
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
            .addDefaultCase(() => {
            })

    }

})

export const {setUser, cleanUser} = authSlice.actions
export default authSlice.reducer
