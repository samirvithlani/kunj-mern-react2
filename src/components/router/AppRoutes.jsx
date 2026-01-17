import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../common/Login";
import { UserSideBar } from "../user/sidebar/UserSideBar";
import { AdminSideBar } from "../admin/sidebar/AdminSideBar";
import { HomePage } from "../user/home/HomePage";
import { AdminDashboard } from "../admin/home/AdminDashboard";
import { UserList } from "../admin/users/UserList";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <UserSideBar />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminSideBar />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <UserList />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default AppRoutes;
