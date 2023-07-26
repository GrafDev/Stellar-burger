import {useSelector} from "react-redux";
import {getUserSelector} from "../redux/features/auth/auth-selectors";


function useAuth(){
    const {email,token,id,name}=useSelector(getUserSelector)
    return{
        isAuth:!!email,
        email,
        token,
        id,
        name,
    }
}
export default useAuth;