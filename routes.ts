import { IconName, Route } from "../typescript";
import ApartmentIcon from "@material-ui/icons/Apartment"; //entreprise
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"; // cartable
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber"; // ticket
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly"; // pos
import ScoreIcon from "@material-ui/icons/Score"; // report
import StarsIcon from "@material-ui/icons/Stars"; // win
import SettingsIcon from "@material-ui/icons/Settings"; // setting
import HelpIcon from "@material-ui/icons/Help"; // help
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"; // signOut

export const routeItem = {
  managementPath: [
    {
      icon: ApartmentIcon,
      payload: "Toutes vos Borlettes",
      path: Route.BorlettePath.borlette,
    },
    {
      icon: BusinessCenterIcon,
      payload: "Tous vos employés",
      path: Route.EmployesPath.employes,
    },
    {
      icon: ScoreIcon,
      payload: "Rapport",
      path: Route.AppPath.report,
    },
    {
      icon: MobileFriendlyIcon,
      payload: "Tous vos POS",
      path: Route.PosPath.pos,
    },
  ],
  ticketPath: [
    {
      icon: ConfirmationNumberIcon,
      payload: "Tous les ticktes",
      path: Route.TicketsPath.tickets,
    },
    {
      icon: StarsIcon,
      payload: "Numéro gagnant",
      path: Route.AppPath.lottoResult,
    },
  ],
  settingPath: [
    {
      icon: SettingsIcon,
      payload: "Configuration",
      path: Route.AppPath.setting,
    },
  ],
  applicationPath: [
    {
      icon: HelpIcon,
      payload: "Support",
      path: Route.AppPath.help,
    },
    {
      icon: MeetingRoomIcon,
      payload: "Se deconnecter",
      path: Route.AuthPath.login,
    },
  ],
};
