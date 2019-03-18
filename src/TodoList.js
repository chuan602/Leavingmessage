import React, { Component } from "react";
import { connect } from "react-redux";
import { message, Modal } from "antd";
import {
    changeInputValue,
    addListItem,
    initList,
    getChangeList,
    getTotalCountCreator,
    addedListItemCreator,
    loginCreator,
    deleteMsgById,
    initLoginInput,
    logoutCreator
} from "./store/actionCreators";
import {
    CHANGE_LOADING,
    VISIBLE_FALSE,
    VISIBLE_TRUE,
    LOGIN_LOADING,
    UPDATE_CURPAGE
} from "./store/actionTypes";
import TodoListUI from "./TodoListUI";
import "antd/dist/antd.css";

message.config({
    top: 100,
    duration: 2,
    maxCount: 3
});

class TodoList extends Component {
    render() {
        return (
            <TodoListUI
                inputValue={this.props.inputValue}
                list={this.props.list}
                change={this.props.change}
                handleBtnClick={this.props.handleBtnClick}
                totalCount={this.props.totalCount}
                onPageChange={this.props.onPageChange}
                loading={this.props.loading}
                loginVisible={this.props.loginVisible}
                handleLoginCancel={this.props.handleLoginCancel}
                handleLoginShow={this.props.handleLoginShow}
                handleLogin={this.props.handleLogin}
                userName={this.props.userName}
                password={this.props.password}
                loginLoading={this.props.loginLoading}
                loginSuccess={this.props.loginSuccess}
                handleDelete={this.props.handleDelete}
                curPage={this.props.curPage}
                logout={this.props.logout}
            />
        );
    }

    componentDidMount() {
        this.props.init();
        this.props.getTotalCount();
    }
}

const mapStateToProps = state => ({
    inputValue: state.inputValue,
    list: state.list,
    totalCount: state.totalCount,
    loading: state.loading,
    loginVisible: state.loginVisible,
    loginLoading: state.loginLoading,
    userName: state.userName,
    password: state.password,
    loginSuccess: state.loginSuccess,
    curPage: state.curPage
});

const mapDispatchtoProps = dispatch => ({
    logout() {
            dispatch(logoutCreator());
    },
    change(e) {
        const action = changeInputValue(e.target.value);
        //发送action
        dispatch(action);
    },

    handleBtnClick(value) {
        value = value.replace(/(^\s*)|(\s*$)/g, "");
        if (!value) {
            message.error("sorry,您的留言内容不规范噢~");
            dispatch(addedListItemCreator());
            return;
        }
        const action = addListItem(value);
        dispatch(action);
    },

    init() {
        const action = initList();
        dispatch(action);
    },

    onPageChange(page) {
        const action = getChangeList(page);
        dispatch({ type: CHANGE_LOADING });
        dispatch({ type: UPDATE_CURPAGE, page });
        dispatch(action);
    },

    getTotalCount() {
        const action = getTotalCountCreator();
        dispatch(action);
    },

    handleLoginCancel() {
        message.destroy();
        dispatch({ type: VISIBLE_FALSE });
        dispatch(initLoginInput());
    },

    handleLogin(loginInfo) {
        const action = loginCreator(loginInfo);
        dispatch({ type: LOGIN_LOADING, value: true });
        dispatch(action);
    },

    handleLoginShow() {
        message.destroy();
        dispatch({ type: VISIBLE_TRUE });
    },

    handleDelete(id, loginSuccess, msg, curPage) {
        if (loginSuccess) {
            //已登陆
            Modal.confirm({
                title: "您确定要删除这条留言吗？",
                content: `"${msg}"`,
                okText: "删除",
                okType: "danger",
                cancelText: "再想一下",
                onOk() {
                    const action = deleteMsgById({ id, curPage });
                    dispatch(action);
                },
                onCancel() {
                    console.log("Cancel");
                }
            });
        } else {
            message.warning("非常抱歉~~登陆后才能进行删除操作");
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(TodoList);
