import {useSelector} from "react-redux";
import {getAuthUser} from "../redux/features/auth/auth-selectors";


function useAuth(){
    const {email,token,id,name}=useSelector(getAuthUser)
    return{
        isAuth:!!email,
        email,
        token,
        id,
        name,
    }
}
export default useAuth;