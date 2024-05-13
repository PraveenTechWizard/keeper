import React from "react";

function Notes(props){
    return(
        <div className="takenotes">
            <h3>{props.title_contant}</h3>
            <p>{props.notes_contant}</p>
            <button id="delete" onClick={props.NotesDeletor}>DELETE</button>
        </div>
    )
}

export default Notes
