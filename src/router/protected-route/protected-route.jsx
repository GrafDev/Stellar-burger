import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from "../../components/spinner/spinner";
import {useSelector} from "react-redux";
import {HOME_LINK, LOGIN_LINK} from "../../utils/constants/router-link-constants";



const ProtectedRoute = ({
  element,
  onlyUnAuth = false,
}) => {
  const location = useLocation()
  const { user, isLoading } = useSelector(authSelector)

  if (isLoading) return <Spinner />

  if (onlyUnAuth && user)
    return <Navigate to={location.state?.target || HOME_LINK} replace />

  if (!onlyUnAuth && !user)
    return <Navigate to={LOGIN_LINK} state={{ target: location }} replace />

  return element
}

export default React.memo(ProtectedRoute)
