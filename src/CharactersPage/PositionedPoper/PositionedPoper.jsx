import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import styles from "./PositionedPoper.module.css";
const useStyles = makeStyles((theme) => ({
  root: {
 
    width: "fit-content",
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function PositionedPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className={classes.root + " " + styles.seeMoreWrapper} onBlur={(e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setOpen(false);
      }
    }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>
                <div>Origin: {props.origin}</div>
                <div>Location: {props.location}</div>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <button className={styles.seeMore} onClick={handleClick('top-start')}>See more</button>
    </div>
  );
}