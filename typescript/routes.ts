import { IconName } from "./asset";

export interface IRouteItem {
  icon: IconName;
  path: typeof Route;
  payload: string;
}

enum AppPath {
  home = "/",
  about = "/about",
  contact = "/contact",
  lottoResult = "dashboard/lottoResult",
  report = "dashboard/report",
  setting = "dashboard/setting",
  help = "/help",
}

enum AuthPath {
  login = "/auth/login",
  signup = "/auth/signup",
  resetPass = "/auth/reset",
}

enum PosPath {
  pos = "/dashboard/pos",
  pos_edit = "/dashboard/pos/:param/edit",
  pos_add = "/dashboard/pos/add",
  pos_view = "/dashboard/pos/:param",
}

enum EmployesPath {
  employes = "/dashboard/employes",
  employes_add = "/dashboard/employes/add",
  employes_view = "/dashboard/employes/:param",
  employes_setting = "/dashboardemployes/:param/setting",
}

enum TicketsPath {
  tickets = "/dashboard/tickets",
  tickets_add = "/dashboard/tickets/add",
  tickets_view = "/dashboard/tickets/:param",
}

enum BorlettePath {
  borlette = "/dashboard/borlette",
  borlette_add = "/dashboard/borlette/add",
  borlette_view = "/dashboard/borlette/:param",
  borlette_setting = "/dashboard/borlette/:param/setting",
}

export const Route = {
  AppPath,
  AuthPath,
  PosPath,
  EmployesPath,
  TicketsPath,
  BorlettePath,
};
