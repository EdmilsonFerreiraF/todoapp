import { createTheme, alpha, responsiveFontSizes } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors';

import { primaryColor, secondaryColor } from './colors'

let theme = createTheme({
  palette: {
    primary: {
      light: green[200],
      main: primaryColor,
      dark: green[500],
      contrastText: '#232323',
    },

    secondary: {
      main: secondaryColor,
      contrastText: green[50]
    }
  },
})

theme.overrides = {
  MuiListItemIcon: {
    root: {
      minWidth: '45px',
    }
  },
  MuiCssBaseline: {
    '@global': {
      ':root': {
        "--aa-search-input-height": '30px',
        "--aa-primary-color-rgb": "255, 255, 255"
      },
      '.grow': {
        flexGrow: 1,
      },
      '.logo': {
        display: 'none',
        cursor: 'pointer',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      '.MuiAppBar-root.mainappbar': {
        color: theme.palette.secondary.contrastText
      },
      '.MuiListItem-root': {
        '&.sidebar__title': {
          padding: '8px 18px 8px 4px',
        },
      },
      '.MuiListItemText-root': {
        '&.MuiListItemText-inset': {
          paddingLeft: '47px',
        },
        '&.sidebar__title': {
          paddingLeft: '45px',
        }
      },
      '.MuiButtonBase-root': {
        '&.menu-button': {
          marginRight: theme.spacing(2),
        },
      },
      '.MuiSvgIcon-colorError': {
        cursor: 'pointer',
      },
      'sidebar__wrapper': {
        height: '100%'
      },
      '.sidebar--open': {
        display: 'flex',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        maxWidth: '240px',
        color: theme.palette.primary.contrastText,
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        backgroundColor: theme.palette.background.paper,
        flexDirection: 'column',
      },
      '.sidebar--closed': {
        display: 'none',
      },
      '.aa-Form': {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: '100%',
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
          width: 'auto',
          marginLeft: theme.spacing(3),
        },
        border: 0,
        "&:focus-within": {
        boxShadow: "none"
        },
      },
      '.aa-InputWrapperPrefix': {
        display: 'flex',
        position: 'absolute',
        height: '100%',
        padding: theme.spacing(0, 1),
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      },
      '.aa-InputWrapper': {
        paddingLeft: "15px"
      },
      '.aa-Input': {
        width: '100%',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        color: theme.palette.secondary.contrastText,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
          width: '20ch',
          '&:focus': {
            width: '26ch',
          },
        },
      },
      '.aa-ClearButton': {
        color: theme.palette.secondary.contrastText,
      },
      '.aa-ClearButton:focus, .aa-ClearButton:hover': {
        color: "#d6d6d6"
      },
      '.toolbar__auth--mobile': {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      '.toolbar__auth--desktop': {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'block',
        },
      },
    }
  }
}

theme = responsiveFontSizes(theme);

export default theme;