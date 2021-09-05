const SET_WATCH_ITEM = "SET-WATCH-ITEM";
const DELETE_WATCH_ITEM = "DELETE-WATCH-ITEM";
const SET_CHECK_BOX = "SET-CHECK-BOX";

let initialState = {
    watchList: [],
};

const myWatchListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WATCH_ITEM: {
            let watchList = state.watchList.map((item) => {
                if(Array.isArray(item)) {
                    return item;
                }
                return [false, item];
            }
            );
            watchList.push([false, action.watchList]);
            return {
                ...state,
                watchList: watchList,
            }
        }
        case DELETE_WATCH_ITEM: {
            let watchList = state.watchList.map((item) => item);

            watchList.splice(action.index, 1);
            return {
                ...state,
                watchList: watchList,
            }
        }
        case SET_CHECK_BOX: {
            let watchList = state.watchList.map((item, index) => {
                if (index == action.index) {
                    return [action.value, item[1]];
                }
                return item;
            }
            );
            return {
                ...state,
                watchList: watchList,
            }
        }
        default:
            return state;
    }
}


export const setWatchList = (watchList) => ({ type: SET_WATCH_ITEM, watchList });

export const deleteWatchItem = (index) => ({ type: DELETE_WATCH_ITEM, index });

export const setCheckBox = (index, value) => ({ type: SET_CHECK_BOX, index, value })


export default myWatchListReducer;