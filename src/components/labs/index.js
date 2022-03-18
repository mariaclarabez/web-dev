import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList"


const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <Styles/>
            <Classes/>
            <ConditionalOutput/>
            <TodoItem/>
            <TodoList/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <hr/>
        </div>
    )
};


export default Labs;