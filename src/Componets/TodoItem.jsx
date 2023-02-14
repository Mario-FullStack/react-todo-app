import React from "react";
import "../App.css";

class TodoItem extends React.Component {
    render() {
        return (
            <div class="list">
                <li class="check">
                    <input type="checkbox"/>                     
                </li>
                <li class="texto">
                    {this.props.text}                                         
                </li>
            </div>
        );
    }
}

export default TodoItem;