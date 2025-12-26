import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAdminAuth = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(admin);
    setLoading(false);

    if (!admin) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return { loading, isAdmin };
};
