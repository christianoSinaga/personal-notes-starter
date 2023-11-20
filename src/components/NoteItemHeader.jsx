import React from "react";
import { showFormattedDate } from "../utils";

function NoteHeader({ title, date }) {
    return(
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{showFormattedDate(date)}</p>
        </div>
    );
}

export default NoteHeader;