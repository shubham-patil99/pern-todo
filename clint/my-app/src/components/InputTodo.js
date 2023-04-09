import React, {useState} from 'react';



function TodoInput(props) {

const [description, setDescription] = useState("")

const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(body)
      });
      window.location = "/"
    } catch (err) {
    }
}

  return (
    <div>
     <form className='d-flex mt-5' onSubmit={onSubmitForm}>
        <input className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
        <button className='btn btn-success'>Add</button> 
      </form>
    </div>
  );
}

export default TodoInput;

