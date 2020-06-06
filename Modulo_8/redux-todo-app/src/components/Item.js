import React from "react";

import "./Item.css";

function Item({ todo, index, onEdit, onDelete }) {
    return (
        <div className="item">
            <li>{todo}</li>
            <div className="buttons">
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
            </div>
        </div>
    );
}

export default Item;