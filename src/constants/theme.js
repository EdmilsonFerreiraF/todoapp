import {
  createTheme,
  alpha,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import { primaryColor, secondaryColor } from "./colors";

let theme = createTheme({
  palette: {
    primary: {
      light: green[200],
      main: primaryColor,
      dark: green[500],
      contrastText: "#232323",
    },

    secondary: {
      light: green["A100"],
      main: secondaryColor,
      contrastText: green[50],
    },
  },
});

theme.overrides = {
  MuiListItemIcon: {
    root: {
      minWidth: "45px",
    },
  },
  MuiCssBaseline: {
    "@global": {
      ":root": {
        "--aa-search-input-height": "30px",
        "--aa-primary-color-rgb": "255, 255, 255",
      },
      ".aa-Form, .aa-DetachedSearchButton": {
        position: "relative",
        width: "100%",
        marginLeft: 0,
        border: 0,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        [theme.breakpoints.up("sm")]: {
          width: "auto",
          marginLeft: theme.spacing(4),
        },
        "&:focus-within": {
          boxShadow: "none",
        },
      },
      ".aa-InputWrapperPrefix": {
        display: "flex",
        position: "absolute",
        height: "100%",
        padding: theme.spacing(0, 1),
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      },
      ".aa-InputWrapper": {
        paddingLeft: "15px",
      },
      ".aa-Input, .aa-DetachedSearchButtonPlaceholder": {
        width: "100%",
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        color: theme.palette.secondary.contrastText,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("sm")]: {
          width: "20ch",
          "&:focus": {
            width: "26ch",
          },
        },
      },
      ".aa-DetachedSearchButtonPlaceholder": {
        width: "20ch",
      },
      ".aa-DetachedFormContainer .aa-Input": {
        color: theme.palette.primary.contrastText,
      },
      ".aa-ClearButton": {
        color: theme.palette.secondary.contrastText,
      },
      ".aa-ClearButton:focus, .aa-ClearButton:hover": {
        color: "#d6d6d6",
      },
    },
  },
};

theme = responsiveFontSizes(theme);

export default theme;