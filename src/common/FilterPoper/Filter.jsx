import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import styles from "./Filter.module.css"

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90px",
    border: '1px solid',
    borderRadius: '2px',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TransitionsPopper(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;
  let varients = props.varients.map((item) => <div className={styles.itemFilter} onClick={() => {props.setFilter(`${props.filterName.toLowerCase()}=${item.toLowerCase()}`); setAnchorEl(null);}}>{item}</div>)
  return (
    <div className={styles.popup} onBlur={(e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setAnchorEl(null);
      }
    }}>
      <button className={styles.buttonFilter} aria-describedby={id} type="button" onClick={handleClick}>
        {props.filterName}
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper + " " + styles.divPopup}>
              {varients}
            </div>

          </Fade>
        )}
      </Popper>
    </div>
  );
}