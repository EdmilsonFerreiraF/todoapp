import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import {
  AppBar, Toolbar, Button, IconButton,
  Typography, Divider, List, ListItem,
  ListItemIcon, ListItemText, Menu, MenuItem, useTheme, Drawer
} from '@material-ui/core'
import {
  AccountCircle, Menu as MenuIcon,
  MoreVert, Star, Close, Inbox as InboxIcon,
  Mail as MailIcon
} from '@material-ui/icons'

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

  const handleSignupButton = () => {
    handleMobileMenuClose();

    goToSignUp(router)
  }

  const handleLoginButton = () => {
    handleMobileMenuClose();

    goToLogin(router)
  }

  const handleLogoutButton = () => {
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

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <AppBar position="static" className="mainappbar">
        <Toolbar>
          <div>
            <IconButton
              color="inherit"
              aria-label="open Sidebar"
              onClick={handleSidebarOpen}
              edge="start"
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="persistent"
              anchor="left"
              open={sidebarOpen}
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
                      onClick={handleSidebarClose}
                    >
                      <Close color="error" />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText
                    className="sidebar__title"
                    id="transition-modal-description"
                    primary="Lists" />
                </ListItem>
              </div>
              <Divider />
              <List className="sidebar__list" component="nav" >
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    {index % 2 === 0 ?
                      (
                        <>
                          <ListItemIcon>
                            <Star htmlColor={theme.palette.warning.main} />
                          </ListItemIcon>
                          <ListItemText
                            className="sidebar__text"
                            primary={text}
                          />
                        </>
                      )
                      :
                      <ListItemText
                        className="sidebar__text"
                        inset primary={text}
                      />
                    }
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text}
                      className="sidebar__text"
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
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
              Todoapp
            </Typography>
          </div>

          <Search />

          <div className="grow" />
          <div className="toolbar__auth--desktop">
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

                  <Button onClick={handleLogoutButton} color="inherit">Logout</Button>
                </div>
              )
              : (
                <div>
                  <Button color="inherit" className="toolbar__button" onClick={handleSignupButton}>Signup</Button>
                  <Button color="inherit" className="toolbar__button" onClick={handleLoginButton}>Login</Button>
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
            {loggedContext.logged ?
              (
                <div>
                  <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                  <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                  <MenuItem onClick={handleLogoutButton}>Logout</MenuItem>
                </div>
              )
              :
              (
                <div>
                  <MenuItem onClick={handleSignupButton}>Sign up</MenuItem>
                  <MenuItem onClick={handleLoginButton}>Login</MenuItem>
                </div>
              )
            }
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainAppBar