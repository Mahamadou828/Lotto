import React from "react";
import { useRouter } from "next/router";
import { routeItem } from "../config/routes";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { v4 as uuid } from "uuid";
import classnames from "classnames";

interface Props {
  userName: string;
  userEmail: string;
}

export default function DrawerNavigation(props: Props) {
  const { pathname, push } = useRouter();

  /**@tofix */
  const handleRedirect = (route: string) => {
    console.log(route);
  };

  return (
    <nav className="drawer-nav">
      <div className="drawer_top" />
      <h2 className="d-flex d-column drawer_padding">
        <span className="text-white">{props.userName}</span>
        <span className="text-subtitle">{props.userEmail}</span>
      </h2>
      <Divider className="drawer_divider" />
      <List className="drawer_padding">
        <h3 className="drawer-nav-title">Générale</h3>
        {routeItem.managementPath.map((item) => {
          const { icon: Icon } = item;
          return (
            <ListItem
              className={classnames("btn-nav", {
                "drawer-nav-currentPage": item.path === pathname,
              })}
              button
              key={uuid()}
              onClick={() => handleRedirect(item.path)}
            >
              <ListItemIcon>
                <Icon fontSize="large" className="btn-nav_icon" />
              </ListItemIcon>
              <ListItemText primary={item.payload} />
            </ListItem>
          );
        })}
      </List>
      <List className="drawer_padding">
        <h3 className="drawer-nav-title">Tickets de lotterie</h3>
        {routeItem.ticketPath.map((item) => {
          const { icon: Icon } = item;
          return (
            <ListItem
              className={classnames("btn-nav", {
                "drawer-nav-currentPage": item.path === pathname,
              })}
              button
              key={uuid()}
              onClick={() => handleRedirect(item.path)}
            >
              <ListItemIcon>
                <ListItemIcon>
                  <Icon fontSize="large" className="btn-nav_icon" />
                </ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={item.payload} />
            </ListItem>
          );
        })}
      </List>
      <List className="drawer_padding">
        <h3 className="drawer-nav-title">Paramètre</h3>
        {routeItem.settingPath.map((item) => {
          const { icon: Icon } = item;
          return (
            <ListItem
              className={classnames("btn-nav", {
                "drawer-nav-currentPage": item.path === pathname,
              })}
              button
              key={uuid()}
              onClick={() => handleRedirect(item.path)}
            >
              <ListItemIcon>
                <Icon fontSize="large" className="btn-nav_icon" />
              </ListItemIcon>
              <ListItemText primary={item.payload} />
            </ListItem>
          );
        })}
      </List>
      <Divider className="drawer_divider drawer_divider_bottom" />
      <List className="drawer_padding">
        <h3 className="drawer-nav-title">Paramètre</h3>
        {routeItem.applicationPath.map((item) => {
          const { icon: Icon } = item;
          return (
            <ListItem
              className={classnames("btn-nav", {
                "drawer-nav-currentPage": item.path === pathname,
              })}
              button
              key={uuid()}
              onClick={() => handleRedirect(item.path)}
            >
              <ListItemIcon>
                <Icon fontSize="large" className="btn-nav_icon" />
              </ListItemIcon>
              <ListItemText primary={item.payload} />
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
}
