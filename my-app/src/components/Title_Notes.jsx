import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Notes(props){
    return(
        <div className="takenotes">
            <h3>{props.title_contant}</h3>
            <p>{props.notes_contant}</p>
            <button id="delete" onClick={props.NotesDeletor}><DeleteIcon /></button>
        </div>
    )
}

export default Notes
