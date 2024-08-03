import { lazy } from "react";
import Home from "./Components/Home";
// Lazy loading - used to load a component only when needed
const User = lazy(() => import("./Components/User"));
const Repos = lazy(() => import("./Components/Repos"));
const Users = lazy(() => import("./Components/Users"));
const NotFound = lazy(() => import("./Components/NotFound"));
const Search = lazy(() => import("./Components/Search"));
const AuthProfile = lazy(() => import("./Components/AuthProfile"));
const Login = lazy(() => import("./Components/Login"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/users/user/:username",
    component: User,
    requiresAuth: false,
  },
  {
    path: "/repos",
    component: Repos,
    requiresAuth: false,
  },
  {
    path: "/*",
    component: NotFound,
    requiresAuth: false,
  },
  {
    path: "/users",
    component: Users,
    requiresAuth: false,
  },
  {
    path: "/search",
    component: Search,
    requiresAuth: false,
  },
  {
    path: "/authProfile",
    component: AuthProfile,
    requiresAuth: true,
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false,
  },
];
