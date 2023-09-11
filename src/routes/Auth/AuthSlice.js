import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name:"AuthToken",
    initialState:{
        token:"",
        user : {
            id_user : null ,
            email : "",
            lastname:"",
            firstname:"",
            phone:"",
            role: null
        }
    },
    reducers:{
        setToken(state,actions){
            state.token = actions.payload;
        },
        unsetToken(state){
            state.token = "";
        },
        setUser(state,actions){
            state.user.id_user = actions.payload.id_user
            state.user.email = actions.payload.email
            state.user.lastname = actions.payload.lastname
            state.user.firstname = actions.payload.firstname
            state.user.phone = actions.payload.phone
            state.user.role = actions.payload.role
        }
    }
})


export const {setToken,unsetToken,setUser} = AuthSlice.actions;

export default AuthSlice.reducer;
