import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// для localStorage
import storage from "redux-persist/lib/storage";
// для sessionStorage
// import sessionStorage from 'redux-persist/lib/storage/session'

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
