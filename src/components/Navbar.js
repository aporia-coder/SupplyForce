import React from "react";
import SFLogo from "../assets/sflogo.svg";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    backgroundColor: "white",
    height: "7rem",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "6rem",
  },
  logoText: {
    color: "#62646e",
    textTransform: "uppercase",
  },
  contact: {
    marginRight: theme.spacing(16),
  },
  login: {
    marginLeft: theme.spacing(8),
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.nav}>
        <Button className={classes.contact}>contact</Button>
        <span className={classes.logoText}>supply</span>
        <img src={SFLogo} alt="Supply Force Logo" className={classes.logo} />
        <span className={classes.logoText}>force</span>
        <Button className={classes.login}>login / register</Button>
      </Toolbar>
    </AppBar>
  );
};
