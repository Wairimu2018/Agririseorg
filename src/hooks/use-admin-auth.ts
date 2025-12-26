import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAdminAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const adminFlag = localStorage.getItem('isAdmin') === 'true';

    setUser(email);
    setIsAdmin(adminFlag);
    setLoading(false);

    if (!email || !adminFlag) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return { user, isAdmin, loading };
};
