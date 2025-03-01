import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);

  const { deleteNote } = context;

  const { note } = props;

  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-solid fa-trash-can"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i className="fa-regular fa-pen-to-square ms-3"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
