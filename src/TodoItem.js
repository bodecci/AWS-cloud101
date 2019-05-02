import React, { Component } from 'react';


class TodoItem extends Component {

    render() {
        const item = this.props.item;
        return(
            <li>
                <input type="checkbox" />
                {item.name}

            </li>
        )
    }
}

export default TodoItem;