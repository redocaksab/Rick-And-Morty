import React from "react";
import ListForm from "./ListForm/ListForm";
import styles from "./WatchList.module.css";
import DeleteButton from "./DeleteButton/DeleteButton";

const WatchList = (props) => {

    let watchList = props.watchList.map((item, index) =>
        <div className={styles.itemListWrapper}>
                <input className={styles.customCheckbox} id={`${index}`} checked={props.watchList[index][0]} type="checkbox" onClick={(e) => { props.setCheckBox(index, e.currentTarget.checked); }} />
                <label className={styles.listItem} for={`${index}`}>{index + 1}.  {item} <div className={styles.deleteButton}><DeleteButton deleteWatchItem={props.deleteWatchItem} index={index} /></div></label>
        </div>);
    return (
        <>
            <div className={styles.listForm}>
                <ListForm setWatchList={props.setWatchList} />
            </div>
            <div class={styles.title}><h1>My watch list</h1></div>
            <div className={styles.watchList}>
                {watchList}
            </div>
        </>
    )
}

export default WatchList;