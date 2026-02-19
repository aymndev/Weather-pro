import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("today", "routes/today.tsx"),
  ] satisfies RouteConfig;
