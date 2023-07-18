import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {USER_LOGIN_URL, USER_REGISTRATION_URL} from "../../../utils/constants/outlink-constants";
import {setCookie} from "../../../utils/cookie";


const initialState = {
    user:{
        name: '',
        email: '',
        // token: '',
    },
    isLoading: true,
    hasError: false,
}

export const rescueUser = createAsyncThunk(
    'auth/rescueUser',
    async (form,registration, {rejectedWithValue, dispatch}) => {

        const res = await axios.post(registration='reg'?USER_REGISTRATION_URL:USER_LOGIN_URL, registration='reg'?{
            "email": form.email,
            "password": form.password,
            "name": form.name,
        }:
        {
            "email": form.email,
            "password": form.password,
        })
        console.log('res',registration ,res.data)
        dispatch(setUser(res.data))
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user.name = action.payload.user.name;
            state.user.email = action.payload.user.email;
            const accessToken=action.payload.accessToken;
            console.log(accessToken)
            setCookie('accessToken', accessToken.split('Bearer ')[1])
            // state.user.token = accessToken;
        },
        cleanUser: (state, action) => {
            state.user.name = null;
            state.user.email = null;
            state.user.token = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(rescueUser.pending, (state) => {
            state.isLoading=true
            state.hasError=false
            console.log('authUser: pending')})
            .addCase(rescueUser.fulfilled, (state) => {
                state.isLoading=true
                state.hasError=false
                console.log('authUser: fulfilled')
            })
            .addCase(rescueUser.rejected, (state) => {
                state.isLoading=false
                state.hasError= true
                console.log('authUser: rejected')

            })
            .addDefaultCase(() => {
            })
    }

})

export const {setUser, cleanUser} = authSlice.actions
export default authSlice.reducer
