import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import styles from "./Pagination.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    props.onPageChanged(value);
  };

  return (
    <div className={classes.root + " " + styles.pagination}>
      <Pagination count={props.pagesCount} onChange={handleChange} />
    </div>
  );
}