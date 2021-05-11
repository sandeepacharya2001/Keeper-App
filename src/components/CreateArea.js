import React, { useState } from "react";

function CreateArea(props) {

    const [note,setNote]=useState({
        title: "",
        content: ""
    });
    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setNote(prevValue => {
          return ({
            ...prevValue,
            [name]: value
          }
          );
        })
    }
    function handleSubmit(event){
        props.addNote(note);
        setNote({
            title: "",
            content:""
        });
        event.preventDefault();
    }

	return (
		<div>
			<form onSubmit={handleSubmit} autoComplete="off">
				<input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
				<textarea onChange={handleChange} name="content" placeholder="Take a note..." value={note.content} rows="3" />
				<button>ADD</button>
			</form>
		</div>
	);
}

export default CreateArea;
