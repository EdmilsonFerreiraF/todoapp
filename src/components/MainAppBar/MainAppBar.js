import { useState } from 'react'
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, IconButton,
  Typography
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

import { goToHome } from '../../routes/coordinator'
import Sidebar from './Sidebar/Sidebar';
import SearchBox from './SearchBox/SearchBox';
import Navbar from './Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    display: 'none',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  mainappbar: {
    color: theme.palette.secondary.contrastText
  },
  navbarButton: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  }
}));

const MainAppBar = () => {
  const router = useRouter()
  const classes = useStyles();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogoClick = () => {
    goToHome(router);
  }

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  return (
    <div>
      <AppBar position="static" className={`${classes.grow} ${classes.mainappbar}`}>
        <Toolbar>
          <div>
            <IconButton
              color="inherit"
              aria-label="open Sidebar"
              onClick={handleSidebarOpen}
              edge="start"
              className={classes.navbarButton}
            >
              <MenuIcon
              />
            </IconButton>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
          <div
            className={classes.logo}
            onClick={handleLogoClick}
          >
            <Typography
              className={classes.logo}
              variant="h6"
              color="inherit"
              noWrap
            >
              Todoapp
            </Typography>
          </div>
          <SearchBox />
          <Navbar />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainAppBar