import * as types from "../../Types/types";
import axios from "axios";


export const getAllUsers = () => dispatch => {
    axios
        .get(`https://randomuser.me/api/?results=20`)
        .then((res) => {
            const { results } = res.data;
            dispatch({
                type: types.GET_ALL_USERS,
                payload: results,
            });
        })
        .catch((error) => { });
}

export const clearUsers = () => dispatch => {
    dispatch({
        type: types.CLEAR_ALL_USERS,
        payload: ""
    })
}