import * as types from "../../Types/types";

const initialState = {
    alluserResponse: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_USERS:
            return {
                ...state,
                alluserResponse: action.payload
            }
        case types.CLEAR_ALL_USERS:
            return initialState;
        default:
            return state
    }
}