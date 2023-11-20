import React from "react";

class NoteInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            charLimit: 50,
        }
        
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onContectChangeEventHandler = this.onContectChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onSubmitEventHandler(event){
        event.preventDefault();

        this.props.createNote(this.state);
    }

    onTitleChangeEventHandler(event){
        const title = event.target.value;
        const charLimit = 50 - title.length;

        this.setState(()=>{
            return{
                title,
                charLimit,
            };
        })
    }

    onContectChangeEventHandler(event){
        this.setState(()=>{
            return {
                body: event.target.value
            };
        })
    }

    render(){
        return(            
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>        
            <h2 className="note-input__title">Buat Catatan</h2>    
                <h3 className="note-input__title__char-limit">sisa karakter : {this.state.charLimit}</h3>    
                <input type="text" placeholder="Judul Catatan..." maxLength={50} value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <textarea placeholder="Isi Catatan..." cols="30" rows="10" value={this.state.body} onChange={this.onContectChangeEventHandler}></textarea>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput;