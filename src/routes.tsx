import Home from "./Home";
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Início",
    key: "home",
    route: "/home",
    icon: <Icon fontSize="medium">home</Icon>,
    component: <Home />,
    noCollapse: true,
  },
];

export default routes;
