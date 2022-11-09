import React from "react";

function ToDoItem(props) {
  return (
    // when item is clicked it calls onChecked function passing in the id as the value
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
