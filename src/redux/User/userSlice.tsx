import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../lib/firebase";

export const createUser = createAsyncThunk(
    "user/create",
    async () => {
        const data = await signInWithPopup(auth, provider);

        return data.user
    }
)

const initialState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
    },
});

export const { setUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;