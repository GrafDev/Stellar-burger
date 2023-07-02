import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {USER_REGISTRATION_URL} from "../../../utils/constants/outlink-constants";


const initialState = {
    name:null,
    email: null,
    token: null,
}
// const signIn = async form => {
//     const data = await loginRequest(form)
//         .then(res => res.json())
//         .then(data => data);
export const authUser = createAsyncThunk(
    'user',
    async (form, {rejectedWithValue, dispatch}) => {

        const res = await axios.post(USER_REGISTRATION_URL,{
            "email": form.email,
                "password": form.password,
                "name": form.name,
        })

        console.log(form)
        dispatch(setUser(res.data.data))
    }
)

    const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        setUser: (state, action) => {
            console.log(action.payload)
            // state.name = action.payload.name;
            // state.email = action.payload.email;
            // state.token = action.payload.token;
        },
        cleanUser: (state, action) => {
            state.name = null;
            state.email = null;
            state.token = null;
        }
    },
        extraReducers: builder => {
            builder.addCase(authUser.pending, () => console.log('authUser: pending'))
                .addCase(authUser.fulfilled, (state) => {
                    console.log('authUser: fulfilled')
                })
                .addCase(authUser.rejected, () => console.log('authUser: rejected'))
                .addDefaultCase(()=>{})
        }
})

export const {setUser, cleanUser} = userSlice.actions
export default userSlice.reducer
