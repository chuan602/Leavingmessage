import {
    CHANGE_INPUT_VALUE,
    ADD_LIST_ITEM,
    DELETE_LIST_ITEM,
    INITLIST,
    GET_INIT_LIST,
    GETED_TOTAL_COUNT,
    GETED_INIT_LIST,
    GET_CHANGE_LIST,
    GET_TOTAL_COUNT,
    ADDED_LIST_ITEM,
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    LOGIN,
    LOGIN_SUCCESS,
    DELETE_MSG_BY_ID,
    INIT_LOGIN_INPUT,
    LOGOUT
} from "./actionTypes";

export const changeInputValue = value => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const addListItem = (value) => ({
    type: ADD_LIST_ITEM,
    value
});

export const deleteListItem = value => ({
    type: DELETE_LIST_ITEM,
    value
});

export const sagaInitList = () => ({
    type: INITLIST
});

export const initList = value => ({
    type: GET_INIT_LIST,
    value
});

export const initedList = value => ({
    type: GETED_INIT_LIST,
    value
});

export const getedTotalCount = value => ({
    type: GETED_TOTAL_COUNT,
    value
});

export const getChangeList = value => ({
    type: GET_CHANGE_LIST,
    value
})

export const getTotalCountCreator = () => ({
    type: GET_TOTAL_COUNT
})

export const addedListItemCreator = () => ({
    type: ADDED_LIST_ITEM
})

export const changeUserName = value => ({
    type: CHANGE_USERNAME,
    value
})

export const changePassword = value => ({
    type: CHANGE_PASSWORD,
    value
})

export const loginCreator = loginInfo => ({
    type: LOGIN,
    loginInfo
})

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
})

export const deleteMsgById = value => ({
    type: DELETE_MSG_BY_ID,
    value
})

export const initLoginInput = () => ({
    type: INIT_LOGIN_INPUT
})

export const logoutCreator = () => ({
    type: LOGOUT
})