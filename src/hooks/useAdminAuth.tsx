// import { useEffect, useState } from 'react';
// import { supabase } from '@/integrations/supabase/client';

// export const useAdminAuth = () => {
//   const [user, setUser] = useState<any>(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkSession = async () => {
//       const { data } = await supabase.auth.getSession();
//       const sessionUser = data.session?.user || null;
//       setUser(sessionUser);
//       setIsAdmin(sessionUser?.email === 'info@agririse.co.ke'); // adjust admin logic
//       setLoading(false);
//     };

//     checkSession();

//     const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//       const sessionUser = session?.user || null;
//       setUser(sessionUser);
//       setIsAdmin(sessionUser?.email === 'info@agririse.co.ke');
//     });

//     return () => listener?.subscription.unsubscribe();
//   }, []);

//   return { user, isAdmin, loading };
// };
