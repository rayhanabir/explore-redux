
import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQ, FETCH_USER_SUCCESS } from "./usersTypes"

export const userFetchReq =()=>{
    return{
        type:FETCH_USER_REQ
    }
}

 const fetchUserSuccess =(users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload : users
    }
}

 const fetchUserFailure =(error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUser =()=>{
    return (dispatch)=>{
        dispatch(userFetchReq)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(err =>{
            const errMsg = err.message;
            dispatch(fetchUserFailure(errMsg))
        })
    }
}