import {useSelector} from "react-redux";
import {getAuthUser} from "../redux/features/auth/auth-selectors";
import PropTypes from "prop-types";


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


useAuth.propTypes = {
  id: PropTypes.string.isRequired,
}

export default useAuth;