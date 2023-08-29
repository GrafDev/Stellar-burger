import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from "../../components/spinner/spinner";
import {useDispatch, useSelector} from "react-redux";
import {HOME_LINK, LOGIN_LINK, PROFILE_LINK} from "../../utils/constants/router-link-constants";
import {getAuthSelector} from "../../redux/features/auth/auth-selectors";



const ProtectedRoute = ({
  element,
  onlyUnAuth = false,
}) => {
  const location= useLocation()
  const {user, isLoading } = useSelector(getAuthSelector)

  const isAuth=!!user.name;
  if (isLoading) return <Spinner />

  if (onlyUnAuth && isAuth)
    return <Navigate to={location.state?.target || HOME_LINK} replace />

  if (!onlyUnAuth && !isAuth) {
   return <Navigate to={LOGIN_LINK} state={{target: location}} replace/>
  }
  return element
}

export default React.memo(ProtectedRoute);