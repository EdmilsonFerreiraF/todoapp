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
      light: green["A100"],
      main: secondaryColor,
      contrastText: green[50],
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
      '.MuiDrawer-paperAnchorDockedLeft': {
        width: '100%',
        maxWidth: '240px',
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
      '.MuiTypography-root': {
        '&.logo--large': {
          marginTop: theme.spacing(8),
          marginBottom: theme.spacing(8),
        },
      },
      '.MuiSvgIcon': {
        '&.-colorError': {
          cursor: 'pointer',
        },
        '&-root': {
          '&.feat-card__icon': {
            width: "100%",
            height: "100%",
            marginTop: "10px",
            color: theme.palette.secondary.main,
          }
        },
      },
      '.MuiAppBar-root': {
        '&.mainappbar': {
          color: theme.palette.secondary.contrastText
        },
      },
      '.MuiListItem': {
        '&-root': {
          '&.sidebar__title': {
            paddingLeft: '4px',
          }
        }
      },
      '.MuiListItemIcon': {
        minWidth: '45px',
      },
      '.MuiListItemText': {
        '&-inset': {
          '&.sidebar__text': {
            paddingLeft: '45px',
          }
        },
        '&-root.sidebar__title': {
          padding: '8px 18px 8px 45px',
        }
      },
      '.MuiButtonBase-root': {
        // '&.toolbar__button': {
        //   margin: "0 5px",
        // },
        '&.menu-button': {
          marginRight: theme.spacing(2),
        },
        '&.start-button': {
          marginTop: theme.spacing(10),
          color: "inherit",
        },
        '&.submit': {
          margin: theme.spacing(3, 0, 2),
        },
      },
      '.aa-Form, .aa-DetachedSearchButton': {
        position: 'relative',
        width: '100%',
        marginLeft: 0,
        border: 0,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        [theme.breakpoints.up('sm')]: {
          width: 'auto',
          marginLeft: theme.spacing(4),
        },
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
      '.aa-Input, .aa-DetachedSearchButtonPlaceholder': {
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
      '.aa-DetachedSearchButtonPlaceholder': {
        width: '20ch'
      },
      '.aa-DetachedFormContainer .aa-Input': {
        color: theme.palette.primary.contrastText,
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
      '.main': {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        textAlign: 'center',
      },
      '.feat-card__media': {
        height: 140,
      },
      '.paper': {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      '.form': {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      '.MuiAvatar-root': {
        '&.avatar': {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
      }
    }
  }
}

theme = responsiveFontSizes(theme);

export default theme;