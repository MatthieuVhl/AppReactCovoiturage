import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name:"AuthToken",
    initialState:{
        token:""
    },
    reducers:{
        setToken(state,actions){
            state.token = actions.payload;
        },
        unsetToken(state){
            state.token = "";
        }
    }
})


export const {setToken,unsetToken} = AuthSlice.actions;

export default AuthSlice.reducer;
