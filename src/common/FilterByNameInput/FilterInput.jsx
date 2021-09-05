import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from "./FilterInput.module.css";



const FilterForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.filterForm}>
            <Field component="input" name="filterInput" placeholder="filter by name" autoComplete="off"/>
        </form>
    )
}

const FilterReduxForm = reduxForm({form: "FilterForm"})(FilterForm);

const FilterFormContainer = (props) => {
    const onSubmit = (formData) => {
            props.setFilter(props.filterName + "=" + formData.filterInput);

    }

    return <FilterReduxForm onSubmit={onSubmit}/>
}



export default FilterFormContainer;