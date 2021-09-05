import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "./DeleteButton.module.css";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={()=> {props.deleteWatchItem(props.index)}}>
      <IconButton aria-label="delete">
        <DeleteIcon/>
      </IconButton>
    </div>
  );
}