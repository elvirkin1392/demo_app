import React, {useState} from 'react';
import {Container as MuiContainer, Typography} from '@material-ui/core';
import Sidebar from "common/sidebar";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import {Toolbar, Button} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExitToApp from "@material-ui/icons/ExitToApp";
import {actions as authActions} from 'services/auth';
import {useDispatch} from 'react-redux';
import {routeTemplates} from '../routeTemplates'
import { Route, Switch } from 'react-router-dom';
import DashboardPage from'pages/dashboardPage'
import UsersPage from "pages/usersPage";
import SettingsPage from "pages/settingsPage";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
    marginLeft: 1,
  },
  logOutButton: {
    marginRight: 36,
    marginLeft: 1,
    textTransform: 'none'
  },
  appBar: {
    background: '#fff',
    zIndex: theme.zIndex.drawer - 1,
    width: 'calc(100% - 72px)',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const sidebarList = [
  {
    list: [{icon: <InboxIcon/>, title: 'Dashboard', link: routeTemplates.dashboardPage,}],
    title: null
  },
  {
    list: [{icon: <InboxIcon/>, title: 'Users', link: routeTemplates.usersPage,},
      {icon: <MailIcon/>, title: 'Settings', link: routeTemplates.settingsPage}],
    title: 'Management'
  }
]
const User = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const onSidebarOpen = () => {
    setOpen(true);
  };
  const logout = () => {
    dispatch(authActions.logout());
  }
  
  const onSidebarClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? onSidebarClose : onSidebarOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon color='primary'/>
          </IconButton>
          <Button
            onClick={logout}
            edge="start"
            className={classes.logOutButton}
          >
            <Typography variant='subtitle2' style={{marginRight: '10px'}}> Log out</Typography>
            
            <ExitToApp color='primary'/>
          </Button>
        </Toolbar>
      
      </AppBar>
      <Sidebar open={open} items={sidebarList}/>
      <main className={classes.content}>
        
        <div className={classes.toolbar}/>
        
        <MuiContainer style={{paddingTop: '50px'}}>
  
          <Switch>
            <Route
              exact
              path={routeTemplates.dashboardPage}
              component={DashboardPage}
            />
            <Route
              exact
              path={routeTemplates.settingsPage}
              component={SettingsPage}
            />
            <Route
              exact
              path={routeTemplates.usersPage}
              component={UsersPage}
            />
          </Switch>
          
        </MuiContainer>
      </main>
    
    
    </div>
  );
};

export default User;
