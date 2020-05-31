import {passwordSettingsType} from "../types";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const initialState= {
    numbers:true,
    chars_lower:true,
    chars_upper:true,
    symbols:true,
    charsLowerNumber:2,
    charsUpperNumber:2,
    numNumber:3,
    symbolsNumber:1,
};

const passwordSettings = (state=initialState,actions)=>{
    switch (actions.type) {
        case passwordSettingsType.CHANGE_PASSWORD_SETTINGS:
            return{
                ...actions.payload,
            }
        default:
            return state;
    }
}

const persistConfig = {
    key: 'root',
    storage,
}


export default persistReducer(persistConfig,passwordSettings);
