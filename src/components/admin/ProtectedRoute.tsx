import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  isAdmin: boolean;
}

const ProtectedRoute = ({ children, isAdmin }: ProtectedRouteProps) => {
  if (!isAdmin) return <Navigate to="/admin-login" replace />;
  return children;
};

export default ProtectedRoute;
