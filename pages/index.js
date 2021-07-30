import { useRouter } from 'next/router';
import { CardMedia, CardContent, CardActionArea, Card, Button, Grid, Container, Typography } from '@material-ui/core';
import { OfflinePin as OfflinePinIcon, Share as ShareIcon, PlaylistAddCheck as PlaylistAddCheckIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { goToSignUp } from '../src/routes/coordinator';
import { useUnprotectPage } from '../src/hooks/useUnprotectPage';

const useStyles = makeStyles((theme) => ({
  logoLarge: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  featCardMedia: {
    height: 140,
  },
  featCardIcon: {
    width: "100%",
    height: "100%",
    marginTop: "10px",
    color: theme.palette.secondary.main,
  },
  startButton: {
    marginTop: theme.spacing(10),
    color: "inherit",
  },
}));

export default function Index() {
  useUnprotectPage();

  const classes = useStyles();
  const router = useRouter();

  const handleStartButton = () => {
    goToSignUp(router);
  }

  return (
    <Container maxWidth="md">
      <Typography
        className={classes.logoLarge}
        variant="h2"
        color="inherit"
        noWrap
      >
        Todoapp
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={9} sm={5} md={4}>
          <Card  >
            <CardActionArea>
              <CardMedia
                className={classes.featCardMedia}
                title="Tasks"
              >
                <PlaylistAddCheckIcon className={classes.featCardIcon} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Tasks
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Create task lists to have a better routine!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={9} sm={5} md={4}>
          <Card  >
            <CardActionArea>
              <CardMedia
                className={classes.featCardMedia}
                title="Use offline"
              >
                <OfflinePinIcon className={classes.featCardIcon} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Use offline
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Keep your tasks and manage them even when you are disconnected
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={9} sm={5} md={4}>
          <Card  >
            <CardActionArea>
              <CardMedia
                className={classes.featCardMedia}
                title="Share tasks"
              >
                <ShareIcon className={classes.featCardIcon} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Share tasks
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Let a list public and get a link to share with your friends
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Button
        onClick={handleStartButton}
        className={classes.startButton} variant="contained" color="secondary" size="large">
        Start
      </Button>
    </Container>
  )
}