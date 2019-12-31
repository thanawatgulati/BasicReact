import { HTTP_REGISTER_FETCHING, HTTP_REGISTER_SUCCESS, HTTP_REGISTER_FAILED, HTTP_LOGIN_SUCCESS, HTTP_LOGIN_FAILED } from "../constants"
const initialState = {
    // แต่่ละ state
    result: null,
    isFetching: false,
    isError: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case HTTP_LOGIN_SUCCESS:
        return { ...state, result: null , isFetching: true , isError: false}
    case  HTTP_LOGIN_SUCCESS:
        return { ...state, result: payload , isFetching: false , isError: false}
    case HTTP_LOGIN_FAILED:
        return { ...state, result: null , isFetching: false , isError: true}
    default:
        return state
    }
}

