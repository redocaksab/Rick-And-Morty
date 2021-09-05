import React from "react";
import Pagination from "../common/Pagination/Pagination";
import styles from "./Characters.module.css";
import PositionedPopper from './PositionedPoper/PositionedPoper';
import FilterPopper from "../common/FilterPoper/Filter";


const Characters = (props) => {
    let characters = props.info.map((item) =>
        <div className={styles.characterWrapper}>
            <div className={styles.characterImage}><img src={item.image}/></div>
            <div className={styles.characterInfo}>
                <div className={styles.characterName}>{item.name}</div>
                <table>
                    <tr className={styles.charactertr}>
                        <td>Status:</td>
                        <td>{item.status}</td>
                    </tr>
                    <tr className={styles.charactertr}>
                        <td>Species:</td>
                        <td>{item.species}</td>
                    </tr>
                    <tr className={styles.charactertr}>
                        <td>Gender:</td>
                        <td>{item.gender}</td>
                    </tr>
                </table>
                <PositionedPopper origin={item.origin.name} location={item.location.name}/>
            </div>
        </div>)
    return (
        <>
            <div className={styles.paginationAnDFilterWrapper}>
                <div className={styles.filter}>
                    <FilterPopper setFilter={props.setFilter} filterName="Gender" varients={["Female", "Male"]} />
                    <FilterPopper setFilter={props.setFilter} filterName="Status" varients={["Alive", "Dead", "Unknown"]} />
                    <FilterPopper setFilter={props.setFilter} filterName="Species" varients={["Human", "Alien"]} />
                </div>
                <div className={styles.pagination}>
                    <Pagination pagesCount={props.pagesCount} onPageChanged={props.onPageChanged} />
                </div>
            </div>

            <div className={styles.charactersWrapper}>
                {characters}
            </div>
        </>
    )
}

export default Characters;