import React from "react";
import {
    Input,
    Button,
    List,
    Pagination,
    Modal,
    Skeleton,
    Menu,
    Dropdown,
    Icon,
} from "antd";
import { Info, Item, LoginContainer, Div } from "./css";
import LoginForm from "./login";

function TodoListUI(props) {
    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={props.logout}>
                注销
            </Menu.Item>
        </Menu>
    );
    let userBox;
    if (props.loginSuccess) {
        userBox = (
            <Dropdown overlay={menu} trigger={["click"]}>
                <span
                    style={{
                        userSelect: "none",
                        fontSize: "16px",
                        color: "#999",
                        lineHeight: "16px"
                    }}
                >
                    <Icon type="user" />
                    {props.userName}
                </span>
            </Dropdown>
        );
    } else {
        userBox = <Button onClick={props.handleLoginShow}>登陆</Button>;
    }
    return (
        <Div>
            <Input
                value={props.inputValue}
                onChange={e => {
                    props.change(e);
                }}
                placeholder="Leaving a message"
                maxLength={64}
                style={{ width: "300px", marginRight: "20px" }}
            />
            <Button
                type="primary"
                onClick={() => {
                    props.handleBtnClick(props.inputValue);
                }}
            >
                留言
            </Button>

            <div style={{ float: "right", cursor: "pointer" }}>{userBox}</div>

            <List
                style={{ margin: "30px 0 10px 0" }}
                // bordered
                dataSource={props.list}
                itemLayout="vertical"
                footer={
                    <Pagination
                        showQuickJumper={true}
                        hideOnSinglePage={true}
                        defaultCurrent={1}
                        total={props.totalCount}
                        showTotal={total => `共  ${total}  条留言`}
                        onChange={props.onPageChange}
                    />
                }
                renderItem={item => (
                    <List.Item
                        style={{ margin: "10px 0" }}
                        data-ind={item.id}
                        extra={
                            <Info>
                                <span>
                                    {item.date
                                        .replace("T", "  ")
                                        .replace(/\.\w*$/, "")
                                    }
                                </span>
                                <b>|</b>
                                <a
                                    href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        props.handleDelete(
                                            item.id,
                                            props.loginSuccess,
                                            item.content,
                                            props.curPage
                                        );
                                    }}
                                >
                                    删除
                                </a>
                            </Info>
                        }
                    >
                        <Skeleton loading={props.loading} active>
                            <Item>{item.content}</Item>
                        </Skeleton>
                    </List.Item>
                )}
            />
            <Modal
                title="登陆"
                bodyStyle={{ paddingLeft: "40px", paddingRight: "40px" }}
                visible={props.loginVisible}
                width={350}
                wrapClassName="login_modal"
                onOk={() => {
                    props.handleLogin({
                        userName: props.userName,
                        password: props.password
                    });
                }}
                onCancel={props.handleLoginCancel}
                footer={[
                    <Button
                        key="submit"
                        type="primary"
                        loading={props.loginLoading}
                        onClick={() => {
                            props.handleLogin({
                                userName: props.userName,
                                password: props.password
                            });
                        }}
                    >
                        登陆
                    </Button>
                ]}
            >
                <LoginContainer>
                    <LoginForm />
                </LoginContainer>
            </Modal>
        </Div>
    );
}

export default TodoListUI;
