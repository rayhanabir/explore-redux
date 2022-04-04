import { BUY_MOBILE } from "./mobiletypes"

const initialState ={
    numOfMobile:30
}
const mobileReducer =(state = initialState, action)=>{
        switch(action.type){
            case BUY_MOBILE:
                return{
                    numOfMobile: state.numOfMobile -1
                }
            default: return state
        }
}

export default mobileReducer;