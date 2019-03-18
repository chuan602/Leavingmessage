import React, { Component } from "react";
import { Input, Icon } from "antd";
import { connect } from 'react-redux';
import { changeUserName, changePassword } from "./store/actionCreators";

class LoginForm extends Component {

    render() {
        return (
            <form>
                <Input
                    placeholder="Enter your username"
                    style={{ marginBottom: "20px" }}
                    type="text"
                    prefix={
                        <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                        />
                    }
                    maxLength={16}
                    value={this.props.userName}
                    onChange={this.props.onChangeUserName}
                />
                <Input
                    placeholder="Enter your password"
                    type="password"
                    prefix={
                        <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                        />
                    }
                    maxLength={16}
                    value={this.props.password}
                    onChange={this.props.onChangePassword}
                />
            </form>
        );
    }

    
}

const mapStateToProps = state => ({
    userName: state.userName,
    password: state.password
})

const mapDispatchToProps = dispatch => ({
    onChangeUserName(e){
        const action = changeUserName(e.target.value);
        dispatch(action);
    },

    onChangePassword(e){
        const action = changePassword(e.target.value);
        dispatch(action);
    },
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
