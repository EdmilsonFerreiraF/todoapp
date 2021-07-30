import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Divider, List, ListItem,
  ListItemIcon, ListItemText, Drawer, useTheme
} from '@material-ui/core'
import {
  Star, Close, Inbox as InboxIcon,
  Mail as MailIcon
} from '@material-ui/icons'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    width: '100%',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    position: 'absolute',
    display: 'flex',
    padding: theme.spacing(0, 2),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sidebar: {
    width: '100%',
    maxWidth: '240px',
  },
  sidebarTitle: {
    padding: '8px 18px 8px 45px',
  },
  sidebarText: {
    paddingLeft: '45px',
  },
  sidebarInsetText: {
    paddingLeft: '45px',
  },
  sidebarIcon: {
    minWidth: '45px',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const Sidebar = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  const handleSidebarClose = () => {
    props.setSidebarOpen(false);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={props.sidebarOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.drawer}
    >
      <div>
        <ListItem
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
            className={classes.sidebarTitle}
            id="transition-modal-description"
            primary="Lists" />
        </ListItem>
      </div>
      <Divider />
      <List component="nav" >
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            {index % 2 === 0 ?
              (
                <>
                  <ListItemIcon className={classes.sidebarIcon}>
                    <Star htmlColor={theme.palette.warning.main} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                  />
                </>
              )
              :
              <ListItemText
                className={` ${classes.sidebarInsetText}`}
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
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar;