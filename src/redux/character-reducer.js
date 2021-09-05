const SET_CHARACTERS = "SET-CHARACTERS";
const SET_PAGE_SIZE_CHARACTERS = "SET-PAGE-SIZE-CHARACTRES";
const SET_FILTER_CHARACTERS = "SET-FILTER-CHARACTRES";
const SET_CURRENT_PAGE_CHARACTERS = "SET-CURRENT-PAGE-CHARACTRES";
let initialState = {
    characters: [],
    currentPage: 0,
    pageSize: 0, 
    filter: null,
};

const charactersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CHARACTERS: {   return {
                ...state,
                characters: action.characters
            }
        
        }
        case SET_PAGE_SIZE_CHARACTERS: {
            return {
                ...state,
                pageSize: action.pageSize
            }
        }
        case SET_FILTER_CHARACTERS: {
            return {
                ...state,
                filter: action.filter
            }
        }
        case SET_CURRENT_PAGE_CHARACTERS:{
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        default:
            return state;
    }
}

export const getCharacters = (pageCount, filter = null) => {
    return (dispatch) => {
        let f = (filter)? filter : "";
        fetch(`https://rickandmortyapi.com/api/character/?page=${pageCount}&` + f).
        then(response => response.ok ? response.json() : Promise.reject(response)).
        then(response => {
            dispatch(setCurrentPage(pageCount));
            dispatch(setCharacters(response.results));
            dispatch(setPageSize(response.info.pages));
            
        }).catch((response) => console.log('some error'))
    }
}

export const setFilter = (filter) => ({type: SET_FILTER_CHARACTERS, filter})
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE_CHARACTERS, currentPage})

const setCharacters = (characters) => ({type: SET_CHARACTERS, characters});

const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE_CHARACTERS, pageSize});

export default charactersReducer;