const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
        <ul className="space-y-2">
          <li><a href="/admin" className="hover:underline">Dashboard</a></li>
          <li><a href="/admin/posts" className="hover:underline">Posts</a></li>
          <li><a href="/admin/access-requests" className="hover:underline">Access Requests</a></li>
        </ul>
      </aside>
      <main className="flex-1 bg-background p-6">{children}</main>
    </div>
  );
};

export default Layout;
