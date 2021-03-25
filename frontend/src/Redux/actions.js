import axios from "axios";
import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionTypes";

export const dataRequest = (payload) => ({
    type: DATA_REQUEST,
    payload
})

export const dataSuccess = (payload) => ({
    type: DATA_SUCCESS,
    payload
})

export const dataFailure = (payload) => ({
    type: DATA_FAILURE,
    payload
})

export const fetchData = payload => async (dispatch) => {
    dispatch(dataRequest())
    try {
        const { data } = await axios.get(`http://localhost:9000/api/data?page=${payload}`);
        dispatch(dataSuccess(data));
    }
    catch (err) {
        dispatch(dataFailure(err))
    }
}