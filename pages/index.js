import { CardMedia, CardContent, CardActionArea, Card, Button, Grid, Container, Typography } from '@material-ui/core';
import { OfflinePin as OfflinePinIcon, Share as ShareIcon, PlaylistAddCheck as PlaylistAddCheckIcon } from '@material-ui/icons';

import { goToSignUp } from '../src/routes/coordinator';

export default function Index() {
  return (
    <Container maxWidth="md" className="presentation">
      <Typography
        className="logo--large"
        variant="h2"
        color="inherit"
        noWrap
      >
        Todoapp
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={9} sm={5} md={4}>
          <Card className="feat-card">
            <CardActionArea>
              <CardMedia
                className="feat-card__media"
                title="Tasks"
              >
                <PlaylistAddCheckIcon className="feat-card__icon" />
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
          <Card className="feat-card">
            <CardActionArea>
              <CardMedia
                className="feat-card__media"
                title="Use offline"
              >
                <OfflinePinIcon className="feat-card__icon" />
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
          <Card className="feat-card">
            <CardActionArea>
              <CardMedia
                className="feat-card__media"
                title="Share tasks"
              >
                <ShareIcon className="feat-card__icon" />
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

      <Button onClick={goToSignUp} className="start-button" variant="contained" color="secondary" size="large">
        Start
      </Button>
    </Container>
  )
}