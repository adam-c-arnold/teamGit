import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

  export default function OpenWeather(props) {
    const { temp } = props;
    const { weatherDescription } = props;
    const [fahr, setFahr] = useState(true);
    const classes = useStyles();

    const handleClick = () => {
        setFahr(!fahr);
    }

  // Temperature Variables

  let fTemp = (temp - 273) * 1.8 + 32;
  let fTempFixed = fTemp.toFixed(2);
  let cTemp = temp - 273;
  let cTempFixed = cTemp.toFixed(2);

  return (
    <div>
      <h2>Your Weather</h2>
      <Card className={classes.root}>
        <CardActionArea onClick={() => setFahr(!fahr)}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Current Weather: {weatherDescription}
            </Typography>
            {fahr ? (
              <Typography variant="body2" color="textSecondary" component="p">
                Current Temperature: {fTempFixed} F
              </Typography>
            ) : (
              <Typography variant="body2" color="textSecondary" component="p">
                Current Temperature: {cTempFixed} C
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
