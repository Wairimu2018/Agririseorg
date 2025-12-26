import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProtectedRoute from "@/components/admin/ProtectedRoute";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <div className="flex-1 container mx-auto px-4 py-12">
          <Card>
            <CardHeader>
              <CardTitle>Admin Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p>Logged in as {email}</p>

              <div className="flex gap-2">
                <Link to="/admin/posts/new">
                  <Button variant="default">New Post</Button>
                </Link>
                <Button onClick={handleSignOut} variant="outline">
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
