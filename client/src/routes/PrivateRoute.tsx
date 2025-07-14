import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/users/useAuth';
import { Loading } from '../components/Common/Loading';


interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, token, loading } = useAuth();

  if (loading) {
    return   <Loading />
  }

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
