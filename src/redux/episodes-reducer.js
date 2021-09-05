const SET_EPISODES = "SET-EPISODES";
const SET_PAGE_SIZE_EPISODES = "SET-PAGE-SIZE-EPISODES";
const SET_FILTER_EPISODES = "SET-FILTER-EPISODES";
const SET_CURRENT_PAGE_EPISODES = "SET-CURRENT-PAGE-EPISODES";
const SET_CHARACTER_NAME_EPISODES = "SET-CHARACTER-NAME-EPISODES";
const SET_CLEAR_CHARACTERS_FOR_EPISODES = "SET-CLEAR-CHARECTERS-FOR-EPISODES";

let initialState = {
    episodes: [],
    charactersForEpisode: [],
    currentPage: 0,
    pageSize: 0,
    filter: null,

};

const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EPISODES: {
            return {
                ...state,
                episodes: action.episodes
            }

        }
        case SET_PAGE_SIZE_EPISODES: {
            return {
                ...state,
                pageSize: action.pageSize
            }
        }
        case SET_FILTER_EPISODES: {
            return {
                ...state,
                filter: action.filter
            }
        }
        case SET_CURRENT_PAGE_EPISODES: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_CHARACTER_NAME_EPISODES: {
            let newCharacterNames = state.charactersForEpisode.map(item => item);
            if (!newCharacterNames[action.index]) {
                newCharacterNames[action.index] = [];
            }
            newCharacterNames[action.index].push(action.characterName);
            return {
                ...state,
                charactersForEpisode: newCharacterNames,
            }
        }
        case SET_CLEAR_CHARACTERS_FOR_EPISODES: {
            return {
                ...state,
                charactersForEpisode: []
            }
        }
        default:
            return state;
    }
}


export const getEpisodes = (pageCount, filter = null) => {
    return (dispatch) => {
        let f = (filter) ? filter : "";
        fetch(`https://rickandmortyapi.com/api/episode/?page=${pageCount}&` + f).
            then(response => response.ok ? response.json() : Promise.reject(response)).
            then(response => {
                dispatch(setCurrentPage(pageCount));
                dispatch(setEpisodes(response.results));
                dispatch(setPageSize(response.info.pages));
                dispatch(setClearCharactersForEpisodes());
                response.results.map((item, index) => {
                    item.characters.map(link => {
                        dispatch(getCharactersForEpisode(link, index));
                    })
                })
            }).catch((response) => console.log('some error'))
    }
}
const getCharactersForEpisode = (characteradress, index) => {
    return (dispatch) => {
        fetch(characteradress).
            then(response => response.json()).
            then(response => {
                dispatch(setCharactersForEpisode(response.name, index));
            });
    }
}

export const setFilter = (filter) => ({ type: SET_FILTER_EPISODES, filter })
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE_EPISODES, currentPage })

const setEpisodes = (episodes) => ({ type: SET_EPISODES, episodes });

const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE_EPISODES, pageSize });

const setCharactersForEpisode = (characterName, index) => ({ type: SET_CHARACTER_NAME_EPISODES, characterName, index });

const setClearCharactersForEpisodes = () => ({ type: SET_CLEAR_CHARACTERS_FOR_EPISODES });

export default episodesReducer;