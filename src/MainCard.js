import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import HUE from "@material-ui/core/colors/lightBlue";
const colorBlue = HUE[100];
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: colorBlue,
  },
  media: {
    height: 150,
  },
});

export default function MainCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.media}
          title="Satellite Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Location
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Satellite of current location</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
