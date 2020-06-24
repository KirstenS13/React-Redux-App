import { SEARCH_FOR_TERM_START, SEARCH_FOR_TERM_SUCCESS } from "../actions"

const initialState = {
    test: "this is a test",
    res: {},
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
            return {
                ...state,
                res: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}