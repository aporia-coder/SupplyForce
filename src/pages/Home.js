import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#FFF",
    height: "20rem",
    width: "30rem",
    padding: "1rem",
    textAlign: "center",
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <section className="landing">
      <Grid container justify="space-evenly">
        {["Work", "Supply", "Demand"].map((title, i) => (
          <Grid key={i} item>
            <Paper className={classes.paper} square="true">
              <Typography variant="h2" title={title}>
                {title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};
