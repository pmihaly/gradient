import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  title: {
    marginRight: theme.spacing(2),
    flexGrow: 1
  }
}));

const NavbarComponent = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ marginBottom: "3rem" }} color="inherit">
      <Container>
        <Toolbar>
          <Typography
            variant="h4"
            className={classes.title}
            component={Link}
            to="/"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            gradient
          </Typography>
          <Link to="/settings">
            <IconButton aria-label="settings">
              <SettingsIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarComponent;
