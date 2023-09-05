import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import Spinner from "../../components/spinner/spinner";
import {HOME_LINK, LOGIN_LINK} from "../../utils/constants/router-link-constants";
import {getAuth} from "../../redux/features/auth/auth-selectors";
import {useSelector} from "react-redux";
import {PROFILE_LINK} from "../../utils/constants/outlink-constants";


const ProtectedRoute = ({
                            element,
                            onlyUnAuth = false,
                        }) => {
    const location = useLocation()
    const {user, isLoading} = useSelector(getAuth)
    const isAuth = !!user
    if (isLoading ) return <Spinner/>

    if (onlyUnAuth && isAuth)
        return <Navigate to={location.state?.target || PROFILE_LINK} replace/>

    if (!onlyUnAuth && !isAuth)
        return <Navigate to={LOGIN_LINK} state={{target: location}} replace/>
    return element
}

export default ProtectedRoute;