import React, { useState } from "react";
import Header from "./Header";
import NotesTaker from "./Notes_bord";
import Notes from "./Title_Notes";
import Footer from "./Footer";

function App(){

    const [notes, setNotes] = useState([])


    function onAdd(props){
       
        // Condition for user full all the input box
        if(props.title && props.commands){
            setNotes(preValues => {
                return [...preValues, props]
            })
        }

        else{
            alert("Enter Value Properly")
        }
    

    }

    // Delete notes
    function Delete(index){
        setNotes(notes.filter((elements, id) => id !== index))
    }

    return(
        <div>
            <Header />
            <NotesTaker Addnotes = {onAdd}/>
            {
                notes.map((notesItems, index) => {
                    return <Notes key = {index} title_contant = {notesItems.title} notes_contant = {notesItems.commands} NotesDeletor = {() => Delete(index)}/>
                })
            }
            <Footer/>
        </div>
    )
}

export default App