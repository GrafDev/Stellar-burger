import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const slice = createSlice({
    name: 'auth',
    initialState: { user: null, loading: false, error: null },
    reducers: {
        loginStart: state => { state.loading = true },
        loginSuccess: (state, action) => { state.user = action.payload; state.loading = false; state.error = null },
        loginFail: (state, action) => { state.error = action.payload; state.loading = false },
        logout: state => { state.user = null },
    },
    extraReducers: builder => {
        builder
            .addCase('auth/login', async (state, action) => {
                try {
                    const response = await axios.post('/api/auth/login', action.payload);
                    builder.dispatch({ type: 'auth/loginSuccess', payload: response.data });
                } catch (error) {
                    builder.dispatch({ type: 'auth/loginFail', payload: error.message });
                }
            })
            .addCase('auth/logout', async (state, action) => {
                try {
                    await axios.post('/api/auth/logout');
                    builder.dispatch({ type: 'auth/logout' });
                } catch (error) {
                    console.log(error);
                }
            })
    }
})
