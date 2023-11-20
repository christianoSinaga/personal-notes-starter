import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }){
    return(
        <div className="notes-list">
            {
                notes.map((note)=>(
                    <NoteItem 
                    key = {note.id}
                    id = {note.id}
                    title = {note.title}
                    date = {note.createdAt}
                    content= {note.body}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    />
                ))
            }
        </div>
    );
}

export default NoteList;