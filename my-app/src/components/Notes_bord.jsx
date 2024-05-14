import React, { useState } from "react";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Zoom } from '@mui/material';


function NotesTaker(props){

    // Expandable usestate
    const [isExpandable, setIsExpandable] = useState(false)

    const [notes, setNotes] = useState({
        title: "",
        commands:""
    })  

    function AddonTitle(event){
        const { value } = event.target
        setNotes(prevValues => ({
            ...prevValues,
            title: value
        }))
    }

    function AddonNotes(event){
        const { value } = event.target
        setNotes(prevValues => ({
            ...prevValues,
            commands: value
        }))

    }

    function onButton(event){
        event.preventDefault()
        props.Addnotes(notes)

    }

    function exponded(){
        setIsExpandable(true)
    }

    return(
       
        <div className="notestaker">
            <form>
                <input className="input" placeholder="Title" onClick={exponded} onChange={AddonTitle} value={notes.title}></input>
                <br />
                {isExpandable ?  <textarea  onClick={exponded} id="textarea" className="input" rows = "3" cols="50" placeholder="Notes take..."  onChange={AddonNotes} value={notes.commands}></textarea>  : null}
                <br />
                <Zoom in={isExpandable}>
                    <button id ="add" onClick={onButton}><AddCommentIcon /></button>
                </Zoom>
                
            </form>
        </div>

    )
}

export default NotesTaker
