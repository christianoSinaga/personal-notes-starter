import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {

    //CONSTRUCTOR
    constructor(props){
        super(props);
        this.state = {
            notes : getInitialData(),
            archived : [],
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchivedHandler = this.onUnarchivedHandler.bind(this);
        this.onDeleteArchiveHandler = this.onDeleteArchiveHandler.bind(this);
        this.onCreateNoteEventHandler = this.onCreateNoteEventHandler.bind(this);

    }    

    /// NORMAL LIST FUNCTION 
    onArchiveHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        const archived = this.state.notes.find(note => note.id === id);
        this.setState({
            notes,
            archived : [...this.state.archived, archived]
        });
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes});
    }

    onCreateNoteEventHandler({title, body}){
        this.setState((prevState)=>{
            return {
                notes : [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),                        
                    }
                ]
            }
        })
    }

    /// ARCHIVED LIST FUNCTION
    onUnarchivedHandler(id){
        const archived = this.state.archived.filter(note => note.id !== id);
        const notes = this.state.archived.find(note => note.id === id);
        this.setState({
            archived,
            notes : [...this.state.notes, notes],
        })
    }

    onDeleteArchiveHandler(id){
        const archived = this.state.archived.filter(note => note.id !== id);
        this.setState({archived});
    }

    /// RETURN FUNCTION
    render(){
        
        return(            
            <div className="note-app__body">
                <h1 className="note-app__header">Aplikasi Catatan</h1>                
                <NoteInput createNote={this.onCreateNoteEventHandler}/>
                <h2>Catatan Aktif</h2>  
                {this.state.notes.length === 0 ? (
                    <p>Tidak ada catatan</p>
                ) : (
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                )}                        
                <h2>Arsip</h2>
                {this.state.archived.length === 0 ? (
                    <p>Tidak ada arsip</p> 
                    ) : (
                <NoteList notes={this.state.archived} onDelete={this.onDeleteArchiveHandler} onArchive={this.onUnarchivedHandler}/>
                )}
            </div>
        )
    }
}

export default NoteApp;