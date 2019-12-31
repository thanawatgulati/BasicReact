import { HTTP_REGISTER_FETCHING, HTTP_REGISTER_SUCCESS, HTTP_REGISTER_FAILED } from "../constants"

const initialState = {
    // ผลลัพธ์
    result: null,
    isFetching: false,
    isError: false,
    pass: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case HTTP_REGISTER_FETCHING:
        return { ...state ,result: null,isFetching: true,isError: false,pass: false}
    case HTTP_REGISTER_SUCCESS:
        return { ...state ,result: payload,isFetching: false,isError: false , pass: true}
    case HTTP_REGISTER_FAILED:
        return { ...state ,result: null,isFetching: false,isError: true,pass: false}

    default:
        return state
    }
}
