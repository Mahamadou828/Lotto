import React from "react";
import { IconName, IconSize } from "../typescript";
import classes from "classnames";

interface Props {
  iconName: IconName;
  size?: IconSize;
  color?: "primary" | "secondary";
}

export default function AppIcon(props: Props) {
  const size = `icon-${props.size}`;
  const color = `icon-${props.color}`;
  return <img src={props.iconName} className={classes("icon", size, color)} />;
}
