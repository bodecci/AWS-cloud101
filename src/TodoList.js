import React, { Component } from 'react';
import TodoItem from './TodoItem'


class TodoList extends Component {
    render (){
        return (
            <div className="TodoList">
            <ul>
                {this.props.items.map((item, i) => {
                    return <TodoItem item={item} key={i} />
                })}
            </ul>


            </div>

        );
    }
}

export default TodoList;