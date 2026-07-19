import { creteSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setuser } = userSlice.actions

export default userSlice.reducer

//in reudx toolkit every slice contains 3 things 
//1. name
//2. initialState
//3. reducers

// they take obj as a parameter 