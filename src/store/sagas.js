import { takeEvery, put, call } from "redux-saga/effects";
import {
    GET_INIT_LIST,
    GET_TOTAL_COUNT,
    GET_CHANGE_LIST,
    GETED_CHANGE_LIST,
    CHANGE_LOADING,
    ADD_LIST_ITEM,
    LOGIN,
    LOGIN_LOADING,
    DELETE_MSG_BY_ID,
} from "./actionTypes";
import {
    initedList,
    getedTotalCount,
    addedListItemCreator,
    loginSuccess,
} from "./actionCreators";
import axios from "axios";
import { message } from 'antd'

function* mySaga() {
    //当action的type为INITLIST时，执行fetchUser函数
    yield takeEvery(GET_INIT_LIST, getInitListData);
    yield takeEvery(GET_TOTAL_COUNT, getTotalCount);
    yield takeEvery(GET_CHANGE_LIST, getChangeList);
    yield takeEvery(ADD_LIST_ITEM, addListItem);
    yield takeEvery(LOGIN, checkLogin);
    yield takeEvery(DELETE_MSG_BY_ID, deleteMsg);
}

function* getInitListData() {
    try {
        let page = window.btoa("page=1");
        const res = yield axios.get("/list?" + page);
        const action = initedList(res.data);
        yield put({ type: CHANGE_LOADING });
        yield put(action);
    } catch (e) {
        console.log("can not get /data", e);
    }
}

function* getTotalCount() {
    try {
        const totalCount = yield axios.get("/totalCount");
        const action = getedTotalCount(totalCount.data[0].totalCount);

        yield put(action);
    } catch (error) {
        console.log("can not get totalCount", error);
    }
}

function* getChangeList(action) {
    try {
        let param = `page=${action.value}`;
        param = window.btoa(param);
        const list = yield axios.get(`/list?${param}`);
        yield put({ type: GETED_CHANGE_LIST, value: list.data });
    } catch (error) {
        console.log("can not get changeList", error);
    }
}

function* addListItem(action) {
    const addedAction = addedListItemCreator();
    yield axios.post("/addMessage", { msg: action.value });
    yield call(getInitListData);
    yield put(addedAction);
}

function* checkLogin(action) {
    let ret = yield axios.post("/login", {
        userName: action.loginInfo.userName,
        password: action.loginInfo.password
    });
    
    ret = ret.data;
    if(!ret.length){
        //登陆失败
        message.error("对不起，您输入的用户信息不正确~");        
    } else {
        //登陆成功
        message.success('登陆成功！');
        yield put(loginSuccess());
    }
    
    yield put({type: LOGIN_LOADING, value: false})

}

function * deleteMsg(action) {
    const { id, curPage } = action.value;
    yield axios.post('/delete',{id});
    yield call(getTotalCount);
    yield call(getChangeList,{value: curPage});
}

export default mySaga;
