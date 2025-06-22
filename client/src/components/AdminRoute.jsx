// components/AdminRoute.jsx
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  return isAuthenticated && role === "admin" ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default AdminRoute;