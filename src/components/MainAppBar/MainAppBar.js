import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import { AppBar, Toolbar, Button, IconButton, Typography, Backdrop, Divider, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Modal, Slide, useTheme } from '@material-ui/core'
import { AccountCircle, Menu as MenuIcon, MoreVert, Star, Close } from '@material-ui/icons'

import { goToHome, goToLogin, goToSignUp } from '../../routes/coordinator'
import LoggedContext from '../../context/LoggedContext'
import Search from '../SearchBox/SearchBox'

const MainAppBar = () => {
  const router = useRouter()
  const theme = useTheme();

  const [profileAnchor, setProfileAnchor] = React.useState(null);
  const [mobileMoreAnchor, setMobileMoreAnchorEl] = React.useState(null);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const loggedContext = useContext(LoggedContext)

  const isMenuOpen = Boolean(profileAnchor);
  const isMobileMenuOpen = Boolean(mobileMoreAnchor);

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const menuId = 'primary-search-account-menu';

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleSidebarOpen = () => {
    setSidebarOpen(prev => !prev);
  };

  const handleSignUp = () => {
    handleMobileMenuClose();

    goToSignUp(router)
  }

  const handleLogin = () => {
    handleMobileMenuClose();

    goToLogin(router)
  }

  const handleLogout = () => {
    handleMobileMenuClose();

    localStorage.removeItem("token")
    loggedContext.setLogged(false)
  }

  const handleLogoClick = () => {
    goToHome(router);
  }

  const handleMenuClose = () => {
    setProfileAnchor(null);
    handleMobileMenuClose();
  };

  return (
    <div>
      <AppBar position="static" className="mainappbar">
        <Toolbar>
          <IconButton
            edge="start"
            className="menu-button"
            color="inherit"
            aria-label="open drawer"
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>

          <div
            className="logo"
            onClick={handleLogoClick}
          >
            <Typography
              className="logo"
              variant="h6"
              color="inherit"
              noWrap
            >
              Material-UI
            </Typography>
          </div>

          <Search />

          <div className="grow" />
          <div className="toolbar__auth--desktop">
            {loggedContext.setLogged(true)}
            {loggedContext.logged ?
              (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleProfileMenuOpen}
                  >
                    <AccountCircle />
                  </IconButton>

                  <Button color="inherit">Logout</Button>
                </div>
              )
              : (
                <div>
                  <Button color="inherit">Signup</Button>
                  <Button color="inherit">Login</Button>
                </div>
              )
            }
          </div>

          <div className="toolbar__auth--mobile">
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MoreVert />
            </IconButton>
          </div>

          <Menu
            anchorEl={profileAnchor}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          </Menu>
          <Menu
            anchorEl={mobileMoreAnchor}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
          >
            {loggedContext.logged ? (
              <div>
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </div>
            )
              :
              (
                <div>
                  <MenuItem onClick={handleSignUp}>Sign up</MenuItem>
                  <MenuItem onClick={handleLogin}>Login</MenuItem>
                </div>
              )
            }
          </Menu>
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={sidebarOpen}
        onClose={handleSidebarOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="right" in={sidebarOpen}
          // @ts-ignore
          className={'sidebar--open'} mountOnEnter unmountOnExit
        >
          <div>
            <ListItem
             className="sidebar__title"
             aria-label="contacts"
             id="modal-description">
              <ListItemIcon>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="false"
                  onClick={handleSidebarOpen}
                >
                  <Close color="error" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
               className="sidebar__title"
               id="transition-modal-description"
               primary="Lists" />
            </ListItem>
            <Divider />
            <List className="sidebar__list" component="nav">
              <ListItem button>
                <ListItemIcon>
                  <Star htmlColor={theme.palette.warning.main} />
                </ListItemIcon>
                <ListItemText primary="Chelsea Otakan" />
              </ListItem>
              <ListItem button>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItem>
            </List>
          </div>
        </Slide>
      </Modal>
    </div>
  );
}

export default MainAppBar