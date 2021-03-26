import React, { Component } from "react";
import { DrawerHelpers } from "../../../helpers/DrawerHelpers";

interface Props {}

interface State {}

interface IHome {}

class Home extends Component<Props, State> implements IHome {
  render() {
    return <div></div>;
  }
}

export default DrawerHelpers(Home);
