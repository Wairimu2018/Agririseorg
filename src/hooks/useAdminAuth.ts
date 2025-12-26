import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export const useAdminAuth = () => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionEmail = localStorage.getItem("email");
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    if (sessionEmail && isAdmin) {
      setUser(sessionEmail);
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  return { user, loading };
};
