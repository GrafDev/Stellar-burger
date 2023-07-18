import {useSelector} from "react-redux";
import {getUser} from "../redux/features/auth/auth-selectors";


function useAuth(){
    const {email,token,id,name}=useSelector(getUser)
    return{
        isAuth:!!email,
        email,
        token,
        id,
        name,
    }
}