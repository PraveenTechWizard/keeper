import React, { useState } from "react";

function NotesTaker(props){

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

    return(
       
        <div className="notestaker">
            <form>
                <input className="input" placeholder="Title"  onChange={AddonTitle} value={notes.title}></input>
                <br />
                <textarea  id="textarea" className="input" rows="100" cols="50" placeholder="Notes take..."  onChange={AddonNotes} value={notes.commands}></textarea>
                <br />
                <button  id ="add" onClick={onButton}>Add</button>
            </form>
        </div>

    )
}

export default NotesTaker
