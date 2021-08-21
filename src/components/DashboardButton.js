import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const DashboardButton = ({ children, to }) => (
  <Button
    component={Link}
    to={to}
    variant="outlined"
    color="primary"
    size="large"
    fullWidth
  >
    {children}
  </Button>
);

export default DashboardButton;
