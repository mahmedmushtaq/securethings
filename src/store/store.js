import {applyMiddleware, createStore} from "redux";
import root from "./RootReducer";
import log from "redux-logger";
import { persistStore } from 'redux-persist';

const middleware = [];
if(process.env.NODE_ENV === "development"){
     middleware.push(log);
}

export const store = createStore(root,applyMiddleware(...middleware));
export const persistor =  persistStore(store);

