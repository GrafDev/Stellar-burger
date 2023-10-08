import React, {FC, ReactElement} from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import Spinner from "../../components/spinner/spinner";
import {getAuth} from "../../redux/features/auth/auth-selectors";
import {useSelector} from "react-redux";
import {HOME_LINK, LOGIN_LINK} from "../../utils/constants/router-link-constants";
import {IUseLocation} from "../../utils/types/types";


type TProps ={
    element: ReactElement,
    onlyUnAuth?: boolean,
}

const ProtectedRoute:FC<TProps> = ({ element,onlyUnAuth = false,}) => {

    const location:IUseLocation = useLocation()
    const {user, isLoading} = useSelector(getAuth)
    const isAuth:boolean = !!user
    if (isLoading) return <Spinner/>

    if (onlyUnAuth && isAuth)
        return <Navigate to={location.state?.target || HOME_LINK} replace/>

    if (!onlyUnAuth && !isAuth)
        return <Navigate to={LOGIN_LINK} state={{target: location}} replace/>
    return element
}



export default ProtectedRoute;