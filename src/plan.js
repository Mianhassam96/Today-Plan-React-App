import React from "react";

const Plan = ({ items, onDelete }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index} className="shadow p-2 my-2 col-sm-9">
          {item}
          {/* Add the delete button with onClick to trigger handleDelete */}
          <button
            className="btn btn-danger ml-2"
            onClick={() => onDelete(index)} // Pass the index to onDelete
          >
            X
          </button>
        </li>
      ))}
    </>
  );
};

export default Plan;
