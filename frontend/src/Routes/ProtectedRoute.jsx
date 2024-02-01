import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/authContext'

const ProtectedRoute = ({children,allowedRole}) => {
    const {token, role} = useContext(AuthContext)

    const isAllowed = allowedRole.includes(role)
    const accessibleRoute = token && isAllowed ? children : <Navigate to='/login' replace={true} />

  return accessibleRoute; 
}

export default ProtectedRoute