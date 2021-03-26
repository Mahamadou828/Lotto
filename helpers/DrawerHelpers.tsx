import React, { ComponentType } from "react";
import { useStore } from "react-redux";
import { RootState } from "../config/store";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import DrawerNavigation from "../components/DrawerNavigation";
import SearchInput from "../container/SearchInput";
import SettingsIcon from "@material-ui/icons/Settings"; // setting
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const drawerWidth = 360;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface Props {
  window?: () => Window;
}

export function DrawerHelpers(WrappedComponent: ComponentType) {
  const hocComponent = ({ ...props }) => {
    const { user: auth }: RootState = useStore().getState();
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const container =
      window !== undefined ? () => window().document.body : undefined;

    if (!auth.isAuthenticated || !auth.user)
      return <p>You are not connected</p>;

    const userName = `${auth.user.firstName} ${auth.user.lastName}`;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} color="transparent">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div className="drawer_header d-flex d-space d-align">
              <SearchInput />
              <div className="d-flex d-align">
                <IconButton className="btn-secondary btn-small">
                  <SettingsIcon />
                </IconButton>
                <div className="drawer-selectButton">
                  <IconButton
                    size="medium"
                    className="drawer-selectButton_btn1"
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    size="medium"
                    className="drawer-selectButton_btn2"
                  >
                    <ArrowDropDownIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <DrawerNavigation
                userEmail={auth.user.email}
                userName={userName}
              />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: "360px",
              }}
              variant="permanent"
              open
            >
              <DrawerNavigation
                userEmail={auth.user.email}
                userName={userName}
              />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <WrappedComponent />
        </main>
      </div>
    );
  };
  return hocComponent;
}
