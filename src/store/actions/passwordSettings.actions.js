import {passwordSettingsType} from "../types";

export const changePasswordSettings = payload=>{

    return{
        type:passwordSettingsType.CHANGE_PASSWORD_SETTINGS,
        payload,
    }
}


