import axios from 'axios';

//action creators go here
export const SEARCH_FOR_TERM_START = "SEARCH_FOR_TERM_START";
export const SEARCH_FOR_TERM_SUCCESS = "SEARCH_FOR_TERM_SUCCESS";

export const searchForTerm = searchTerm => dispatch => {
    console.log("searchForTerm action creator");
    dispatch({type: SEARCH_FOR_TERM_START});
    axios
        .get(`https://reststop.randomhouse.com/resources/works/?start=0&max=15&expandLevel=1&search=${searchTerm}`, "works")
        .then(res => {
            console.log('res', res);
            dispatch({type: SEARCH_FOR_TERM_SUCCESS, payload: res})
        })
        .catch(err => {
            console.log('err', err)
        })
}