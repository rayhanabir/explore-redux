import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import mobileReducer from "./mobile/mobileReducer";
import userReducers from "./Users/userReducers";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    mobile:mobileReducer,
    users:userReducers
})

export default rootReducer;