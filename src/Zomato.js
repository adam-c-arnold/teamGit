import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function Zomato(props) {
    const { zomatoRest1Name } = props;
    const { zomatoRest1PhotosURL } = props;
    const { zomatoRest2Name } = props;
    const { zomatoRest2PhotosURL } = props;
    const { zomatoRest3Name } = props;
    const { zomatoRest3PhotosURL } = props;
  const classes = useStyles();
  return (
      <div>
          <h2>Restaurants Near You</h2>
    <Card className={classes.root} justifyContent="center">
    <CardActionArea>
        {zomatoRest1PhotosURL ?
        <CardMedia
          className={classes.media}
          image={zomatoRest1PhotosURL}
        />
        : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {zomatoRest1Name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Divider width={345}/>
    <Card className={classes.root}>
      <CardActionArea>
        {zomatoRest2PhotosURL ?
        <CardMedia
          className={classes.media}
          image={zomatoRest2PhotosURL}
        />
        : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {zomatoRest2Name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Divider width={345}/>
    <Divider width={345}/>
    <Divider width={345}/>
    <Card className={classes.root}>
        <CardActionArea>
            {zomatoRest3PhotosURL ?
            <CardMedia
            className={classes.media}
            image={zomatoRest3PhotosURL}
            />
            : null}
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {zomatoRest3Name}
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    </div>
  );
}