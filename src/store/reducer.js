import {
    CHANGE_INPUT_VALUE,
    ADDED_LIST_ITEM,
    DELETE_LIST_ITEM,
    INITLIST,
    GETED_INIT_LIST,
    GETED_TOTAL_COUNT,
    GETED_CHANGE_LIST,
    CHANGE_LOADING,
    VISIBLE_FALSE,
    VISIBLE_TRUE,
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT,
    UPDATE_CURPAGE,
    INIT_LOGIN_INPUT
} from "./actionTypes";

const defaultState = {
    inputValue: "",
    list: [],
    curPage: 1,
    totalPage: 1,
    totalCount: 1,
    loading: true,
    loginVisible: false,
    loginLoading: false,
    userName: "",
    password: "",
    loginSuccess: false
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case INIT_LOGIN_INPUT:
            newState.userName = newState.password = "";
            newState.loginLoading = false;
            return newState;
        case LOGOUT:
            newState.userName = newState.password = "";
            newState.loginSuccess = false;
            return newState;
        case LOGIN_SUCCESS:
            newState.password = "";
            newState.loginLoading = newState.loginVisible = false;
            newState.loginSuccess = true;
            return newState;
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case GETED_INIT_LIST:
            newState.list = action.value;
            newState.loading = false;
            return newState;
        case INITLIST:
            newState.list = action.value;
            newState.loading = false;
            return newState;
        case ADDED_LIST_ITEM:
            newState.inputValue = "";
            newState.loading = false;
            return newState;
        case DELETE_LIST_ITEM:
            newState.list.splice(action.value, 1);
            newState.loading = false;
            return newState;
        case GETED_TOTAL_COUNT:
            newState.totalCount = action.value;
            return newState;
        case GETED_CHANGE_LIST:
            newState.list = action.value;
            newState.loading = false;
            return newState;
        case CHANGE_LOADING:
            newState.loading = true;
            return newState;
        case VISIBLE_FALSE:
            newState.loginVisible = false;
            return newState;
        case VISIBLE_TRUE:
            newState.loginVisible = true;
            return newState;
        case CHANGE_USERNAME:
            newState.userName = action.value;
            return newState;
        case CHANGE_PASSWORD:
            newState.password = action.value;
            return newState;
        case LOGIN_LOADING:
            newState.loginLoading = action.value;
            return newState;
        case UPDATE_CURPAGE:
            newState.curPage = action.page;
            return newState;
        default:
            return newState;
    }
};
