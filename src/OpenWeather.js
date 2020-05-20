import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  export default function OpenWeather(props) {
    const {weather} = props;
    console.log(weather)
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Location
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Satellite of current location
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }