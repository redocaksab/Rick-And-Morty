const SET_LOCATIONS = "SET-LOCATIONS";
const SET_PAGE_SIZE_LOCATIONS = "SET-PAGE-SIZE-LOCATIONS";
const SET_FILTER_LOCATIONS = "SET-FILTER-LOCATIONS";
const SET_CURRENT_PAGE_LOCATIONS = "SET-CURRENT-PAGE-LOCATIONS";
const SET_RESIDENTS_NAME_LOCATIONS = "SET-RESIDENTS-NAME-LOCATIONS";
const SET_CLEAR_RESIDENTS_FOR_LOCATIONS = "SET-CLEAR-RESIDENTS-FOR-LOCATIONS";

let initialState = {
    locations: [],
    residentsForLocation: [],
    currentPage: 0,
    pageSize: 0, 
    filter: null,
};

const locationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOCATIONS: {   
            return {
            ...state,
            locations: action.locations
        }
    
    }
    case SET_PAGE_SIZE_LOCATIONS: {
        return {
            ...state,
            pageSize: action.pageSize
        }
    }
    case SET_FILTER_LOCATIONS: {
        return {
            ...state,
            filter: action.filter
        }
    }
    case SET_CURRENT_PAGE_LOCATIONS:{
        return {
            ...state,
            currentPage: action.currentPage,
        }
    }
    case SET_RESIDENTS_NAME_LOCATIONS: {
        let newCharacterNames = state.residentsForLocation.map(item => item);
        if (!newCharacterNames[action.index]) {
            newCharacterNames[action.index] = [];
        }
        newCharacterNames[action.index].push(action.characterName);
        return {
            ...state,
            residentsForLocation: newCharacterNames,
        }
    }
    case SET_CLEAR_RESIDENTS_FOR_LOCATIONS: {
        return {
            ...state,
            residentsForLocation: []
        }
    }
        default:
            return state;
    }
}



export const getLocations = (pageCount, filter = null) => {
    return (dispatch) => {
        let f = (filter)? filter : "";
        fetch(`https://rickandmortyapi.com/api/location/?page=${pageCount}&` + f).
        then(response => response.ok ? response.json() : Promise.reject(response)).
        then(response => {
            dispatch(setCurrentPage(pageCount));
            dispatch(setLocation(response.results));
            dispatch(setPageSize(response.info.pages));
            dispatch(setClearResidentsForLocations());
            response.results.map((item, index) => {
                item.residents.map(link => {
                    dispatch(getResidentsForLocations(link, index));
                })
            })
            
        }).catch((response) => console.log('some error'));
    }
}

const getResidentsForLocations = (characteradress, index) => {
    return (dispatch) => {
        fetch(characteradress).
        then(response => response.json()).
        then(response => {
            dispatch(setResidentsForLocations(response.name, index));
        });
    }
}

export const setFilter = (filter) => ({type: SET_FILTER_LOCATIONS, filter})
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE_LOCATIONS, currentPage})

const setLocation = (locations) => ({type: SET_LOCATIONS, locations});

const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE_LOCATIONS, pageSize});

const setClearResidentsForLocations = () => ({type: SET_CLEAR_RESIDENTS_FOR_LOCATIONS});

const setResidentsForLocations = (characterName, index) => ({type: SET_RESIDENTS_NAME_LOCATIONS, characterName, index});

export default locationReducer;