import { FETCH_USER_FAILURE, FETCH_USER_REQ, FETCH_USER_SUCCESS } from "./usersTypes"


const initialState ={
    loading:false,
    users:[],
    error:''
}
const userReducers =(state=initialState, action)=>{
    switch(action.type){
        case FETCH_USER_REQ:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }

        case FETCH_USER_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        default :return state
    }

}
export default userReducers;