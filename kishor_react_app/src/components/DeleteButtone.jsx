import React from 'react';
import '../css/DeleteButton.css'; // Import the CSS file for styling

function DeleteButton(props) {
  return (
    <button className="delete-button" onClick={props.onClick}>
      {props.label || 'Cancel'}
    </button>
  );
}


export default DeleteButton;

