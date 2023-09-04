import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import Spinner from "../../components/spinner/spinner";
import {LOGIN_LINK} from "../../utils/constants/router-link-constants";
import {getAuth} from "../../redux/features/auth/auth-selectors";
import {useSelector} from "react-redux";


const ProtectedRoute = ({
                            element,
                            onlyUnAuth = false,
                        }) => {
    const location = useLocation()
    const {user, isLoading} = useSelector(getAuth)
    const isAuth = !!user
    console.log('ProtectedRoute', user, isLoading, onlyUnAuth,  location)
    if (isLoading ) return <Spinner/>

    if (onlyUnAuth && isAuth)
        return <Navigate to={location.state?.target || LOGIN_LINK} replace/>

    if (!onlyUnAuth && !isAuth)
        return <Navigate to={LOGIN_LINK} state={{target: location}} replace/>
    console.log('ProtectedRoute')
    return element
}

export default ProtectedRoute;