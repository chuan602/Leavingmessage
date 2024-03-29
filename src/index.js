import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import store from './store';
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById("root")
);
