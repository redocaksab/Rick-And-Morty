import React from "react";
import Pagination from "../common/Pagination/Pagination";
import styles from "./Location.module.css";
import FilterPopper from "../common/FilterPoper/Filter";
import FilterReduxForm from "./../common/FilterByNameInput/FilterInput";

const Locations = (props) => {
    let locations = props.info.map((item, index) => {
        let characterNames = props.infoForInfo[index]?.map(item => <span>{item}, </span>)
        return <tr>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.dimension}</td>
            <td><div className={styles.allCharactersWrapper}>...<div className={styles.allCharacters}>{characterNames}</div></div></td>
        </tr>
    }

    );
   
    return (
        <>
            <div className={styles.paginationAnDFilterWrapper}>
                <div className={styles.filter}>
                    <FilterReduxForm setFilter={props.setFilter} filterName="name"/>
                    <FilterPopper setFilter={props.setFilter}
                     filterName="Type"
                     varients={["Planet", "Cluster", "Space station", "Microverse", "TV", "Resort", "Fantasy town", "Dream", "Dimension", "Menagerie", "Game", "Customs", "Daycare", "Dwarf Planet", "Teenyverse", "Box", "Spacecraft", "Artificially generated world", "Machine", "Spa ", "Quadrant", "Quasar", "Mount", "Non-Diegetic Alternative Reality", "Nightmare", "Asteroid", "Acid plant", "Death Star", "Spacecraft", "Base", "Unknown"]} 
                     />
                    <FilterPopper setFilter={props.setFilter} filterName="Dimension" varients={["Dimension C-137", "Post-Apocalyptic Dimension", "Replacement Dimension","Cronenberg Dimension", "Fantasy Dimension", "Dimension 5-126", "Testicle Monster Dimension", "Cromulon Dimension", "Dimension C-500A", "Dimension K-83", "Dimension J19ζ7", "Eric Stoltz Mask Dimension", "Evil Rick's Target Dimension", "Giant Telepathic Spiders Dimension", "Dimension K-22", "Dimension D-99", "Dimension D716", "Dimension D716-B", "Dimension D716-C", "Dimension J-22", "Dimension C-35", "Dimension C-137", "Pizza Dimension", "Phone Dimension", "Chair Dimension", "Fascist Dimension", "Fascist Shrimp Dimension", "Fascist Teddy Bear Dimension", "Wasp Dimension", "Tusk Dimension", "Magic Dimension", "Merged Dimension", "Unknown"]} />
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
                            <th>Type</th>
                            <th>Dimension</th>
                            <th>Residents</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Locations;