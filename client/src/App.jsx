import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import Signup from "./page/Signup";
import Login from "./page/Login";
import Navbar from './components/Navbar';
import Home from "./page/Home";
import Recipe_Indigredients from "./page/Recipe_Indigredients";
import Footer from './components/Footer';
import CuisineForm from "./page/CuisineForm";
import NotFound from "./page/NotFound";
import AdminPanel from "./page/admin/AdminPanel";
import RecipeForm from "./page/RecipeForm";
import UserProfile from "./page/UserProfile"; 
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import ManageCuisines from "./page/admin/ManageCuisines";
import ManageBlogs from "./page/admin/ManageBlogs";
import Dashboard from "./page/admin/Dashboard";
import Unauthorized from "./page/Unauthorized";
import Recipe from "./page/Recipe_Indigredients";
import Blog from "./page/Blog";
import Features from "./page/Features";

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  return (

<BrowserRouter>
      <Routes>

        {/* Layout wrapper */}
        <Route path="/" element={<MainLayout />}>
          {/* Public Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="recipe_ingredients" element={<Recipe_Indigredients />} />
          <Route path="recipeform" element={<RecipeForm />} />
          <Route path="cuisine" element={<CuisineForm />} />
<Route path="/blogs" element={<Blog />} />
<Route path="/features" element={<Features />} />
          {/* Protected User Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<UserProfile />} />
          </Route>

          {/* Admin Dashboard Routes */}
          {/* <Route path="admin" element={<AdminPanel />} />
         //
          <Route element={<AdminRoute />}>
            <Route path="admin/dashboard" element={<Dashboard/>} />

            <Route path="admin/manage-cuisines" element={<ManageCuisines/>} />
            <Route path="admin/blogs" element={<ManageBlogs/>} />
            <Route path="admin/recipes" element={<Recipe/>} />
            <Route path="admin/cuisines" element={<CuisineForm />} />
          </Route> */}

{/* <Route path="admin" element={<AdminRoute><AdminPanel /></AdminRoute>}> */}
<Route path="admin" element={<AdminPanel />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="manage-cuisines" element={<ManageCuisines />} />
  <Route path="blogs" element={<ManageBlogs />} />
  <Route path="recipes" element={<Recipe />} />
  <Route path="add-cuisine" element={<CuisineForm />} />
  <Route path="add-recipe" element={<RecipeForm />} />
</Route>



          {/* Error / Access */}
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Optional fallback redirect (not necessary now) */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}

      </Routes>
    </BrowserRouter>

  );
};

export default App;