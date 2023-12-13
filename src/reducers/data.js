const initialState = {
    searchData: null,
    searchStart: false,
    postData: null
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SEARCH_RESULTS':
            return {
                ...state,
                searchData: action.data
            };
        case 'SEARCH_STARTED':
            return {
                ...state,
                searchStart: true,
            };
        case 'SEARCH_END':
            return {
                ...state,
                searchStart: false
            };
        case 'POST_DATA':
            return {
                ...state,
                postData: action.postData
            };
        default:
            return state;
    }
};

export default dataReducer;