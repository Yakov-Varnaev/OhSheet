import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import { Home } from "../pages/Home";

export const publicRoutes = [
  { path: "signup/", element: <SignUp />, exact: true },
  { path: "signin/", element: <SignIn />, exact: true },
  { path: "profile/:id/", element: <Profile />, exact: true},
  { path: "home/", element: <Home />, exact: true},
];

