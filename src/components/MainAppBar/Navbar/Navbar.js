import { useContext, useState } from 'react'
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles';
import {
  Button, IconButton,
  Menu, MenuItem
} from '@material-ui/core'
import {
  AccountCircle,
  MoreVert
} from '@material-ui/icons'

import { goToLogin, goToSignUp } from '../../../routes/coordinator'
import LoggedContext from '../../../context/LoggedContext'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navbarDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  navbarMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {
  const router = useRouter()
  const classes = useStyles();

  const [profileAnchor, setProfileAnchor] = useState(null);
  const [mobileMoreAnchor, setMobileMoreAnchorEl] = useState(null);

  const loggedContext = useContext(LoggedContext)
  const isMenuOpen = Boolean(profileAnchor);
  const isMobileMenuOpen = Boolean(mobileMoreAnchor);

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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

  const handleMenuClose = () => {
    setProfileAnchor(null);
    handleMobileMenuClose();
  };

  return (
    <>
      <div className={classes.grow} />
      <div className={classes.navbarDesktop}>
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
              <Button color="inherit"
                onClick={handleSignupButton}>Signup</Button>
              <Button color="inherit"
                onClick={handleLoginButton}>Login</Button>
            </div>
          )
        }
      </div>

      <div className={classes.navbarMobile}>
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
    </>
  )
}

export default Navbar;