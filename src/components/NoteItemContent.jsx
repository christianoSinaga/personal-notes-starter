import React from "react";

function NoteContent({content}){
    return(
        <div className="note-item__body">
            <p>{content}</p>
        </div>
    );
}

export default NoteContent;