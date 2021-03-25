import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    error: false,
    data: null,
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        case DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload,
            };
        case DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: null,
                error: true
            };
        default:
            return state
    }
};

export default reducer