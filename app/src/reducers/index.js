import { SEARCH_FOR_TERM_START, SEARCH_FOR_TERM_SUCCESS } from "../actions"

const initialState = {
    results: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_FOR_TERM_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case SEARCH_FOR_TERM_SUCCESS:
            console.log('action.payload', action.payload)
            return {
                ...state,
                results: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}