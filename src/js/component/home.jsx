import React, { useState } from "react";

//create your first component
const initialState = { label: "", done: false };

const Home = () => {
  const [tarea, setTarea] = useState(initialState);

  const[lista, setLista] = useState([])

  const handleChange = (event) => {
    setTarea({
      ...tarea,
      [event.target.name]: event.target.value,
    });
  };

  const agregarTarea= (event)=>{
	if(event.key=="Enter"){
		setLista([
			...lista,
			tarea
		])
	}
	console.log(event.key)
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <form onSubmit={(event)=>{event.preventDefault()}}>
            <input>
              className="form-control"
              type="text"
              placeholder="ingresar tarea"
              name="label"
			  value={tarea.label}
			  onChange={handleChange}
			  onKeyDown={agregarTarea}
		</input>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
