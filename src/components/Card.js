import React from "react";
import MyCard from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const width = "160px";
const height = "200px";

const styles = {
  root: {
    width,
    height,
    cursor: "pointer",
    margin: "12px",
  },
  flipper: {
    transition: "0.6s",
    transformStyle: "preserve-3d",
    position: "relative",
  },
  flipperRotate: {
    transform: "rotateY(180deg)",
  },
  page: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: 0,
    backfaceVisibility: "hidden",
  },
  pageFront: {
    backgroundColor: "silver",
    transform: "rotateY(0deg)",
    zIndex: 2,
  },
  pageBack: {
    backgroundColor: "tomato",
    transform: "rotateY(180deg)",
  },
};

const Card = ({ name, classes, isActive, onClick }) => (
  <div role="presentation" className={classes.root} onClick={onClick}>
    <div
      className={classNames(classes.flipper, {
        [classes.flipperRotate]: isActive,
      })}
    >
      <MyCard className={classNames(classes.page, classes.pageFront)} />
      <MyCard className={classNames(classes.page, classes.pageBack)}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </MyCard>
    </div>
  </div>
);

export default withStyles(styles)(Card);
