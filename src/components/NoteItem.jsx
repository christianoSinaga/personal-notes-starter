import React from "react";
import NoteHeader from "./NoteItemHeader";
import NoteContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ title, date, content, id, onDelete, onArchive }){
    return(
        <div className="note-item">
            <div className="note-item__content">
            <NoteHeader title={title} date={date}/>
            <NoteContent content={content} />            
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} onArchive={onArchive} />
            </div>            
        </div>        
    );
}

export default NoteItem;