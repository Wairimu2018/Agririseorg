import { ReactNode } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { loading, isAdmin } = useAdminAuth();

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!isAdmin) return null; // redirect happens in hook

  return <>{children}</>;
};

export default ProtectedRoute;
