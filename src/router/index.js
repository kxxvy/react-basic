import Login from "@/pages/login";
import Home from "@/pages/home";
import Mine from "@/pages/mine";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/mine",
    component: Mine,
  },
];

export default routes;
