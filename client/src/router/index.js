import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const publicRoutes = [
  { path: "signup/", element: <SignUp />, exact: true },
  { path: "signin/", element: <SignIn />, exact: true },
];
