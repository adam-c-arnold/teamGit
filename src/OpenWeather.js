import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import HUE from "@material-ui/core/colors/yellow";
const colorYellow = HUE[300];
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: colorYellow,
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
  };

  // Temperature Variables

  let fTemp = (temp - 273) * 1.8 + 32;
  let fTempFixed = fTemp.toFixed(0);
  let cTemp = temp - 273;
  let cTempFixed = cTemp.toFixed(0);

  return (
    <div>
      <h2>Your Weather</h2>
      <Card className={classes.root}>
        <CardActionArea onClick={() => setFahr(!fahr)}>
          <CardContent>
            <Typography variant="h5" component="h3">
              Current Weather:
            </Typography>
            <Typography gutterBottom variant="h7" component="h3">
              {weatherDescription}
            </Typography>
            {fahr ? (
              <Typography variant="body2" color="textSecondary" component="p">
                Temp: <strong>{fTempFixed} F </strong>
              </Typography>
            ) : (
              <Typography variant="body2" color="textSecondary" component="p">
                Temp: <strong>{cTempFixed} C</strong>
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
