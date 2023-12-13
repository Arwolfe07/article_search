import * as api from '../apis';

// Fetch the searched data and then store it in the redux store for further use
export const fetchSearchData = (searchData) => async (dispatch) => {
    try {
        dispatch({ type: 'SEARCH_STARTED' });
        const response = await api.searchResults(searchData);
        dispatch({ type: 'FETCH_SEARCH_RESULTS', data: response.data.hits });
        dispatch({ type: 'SEARCH_END' });
    } catch (err) {
        console.log(err);
    }
};

// Fetch the post data and store it for displaying on Post Page
export const fetchPostData = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'SEARCH_STARTED' });
        const response = await api.searchPostData(id);
        dispatch({ type: 'POST_DATA', postData: response.data })
        dispatch({ type: 'SEARCH_END' });
    } catch (err) {
        console.log(err);
    }
}