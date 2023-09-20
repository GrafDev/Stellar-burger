import {PASSWORD_RESET_URL} from "../constants/outlink-constants";
import {checkResponse} from "../check-response";



export const forgotPassword = (form:any) => {
    const loginRequest = async (_form:any) => {
        return await fetch(PASSWORD_RESET_URL, {
            method: 'POST',
            body: {..._form}
        }).then(res => checkResponse(res))



    }
    return loginRequest(form)
}