import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from "./ListForm.module.css";



const ListForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.listForm} > 
            <Field component="input" name="watchInput" placeholder="Enter your watch item" autoComplete="off"/>
        </form>
    )
}

const ListReduxForm = reduxForm({form: "WatchForm"})(ListForm);

const ListFormContainer = (props) => {
    const onSubmit = (formData) => {
         props.setWatchList(formData.watchInput);
    }

    return <ListReduxForm onSubmit={onSubmit}/>
}



export default ListFormContainer;