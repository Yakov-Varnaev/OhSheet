import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

export const publicRoutes = [
  { path: "signup/", element: <SignUp />, exact: true },
  { path: "signin/", element: <SignIn />, exact: true },
  { path: "profile/:id/", element: <Profile />, exact: true},
];

