import React from "react";
import Pagination from "../common/Pagination/Pagination";
import styles from "./Episodes.module.css";
import FilterReduxForm from "./../common/FilterByNameInput/FilterInput";


const Episodes = (props) => {
    let episodes = props.info.map((item, index) => {
        let characterNames = props.infoForInfo[index]?.map(item => <span>{item}, </span>)
        return <tr>
            <td>{item.name}</td>
            <td>{item.air_date}</td>
            <td><div className={styles.allCharactersWrapper}>...<div className={styles.allCharacters}>{characterNames}</div></div></td>
        </tr>
    }

    );
    return (
        <>
            <div className={styles.paginationAnDFilterWrapper}>
                <div className={styles.filter}>
                    <FilterReduxForm setFilter={props.setFilter} filterName="name"/>
                </div>
                <div className={styles.pagination}>
                    <Pagination pagesCount={props.pagesCount} onPageChanged={props.onPageChanged} />
                </div>
            </div>


            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Air date</th>
                            <th>Characters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodes}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Episodes;