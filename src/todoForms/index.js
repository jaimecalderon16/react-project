import React from "react";
import { todoContext } from "../todoContext";
import "../modal/modal.css"

function Todoform(){
    const {setOpenModal, addTodo} = React.useContext(todoContext);
    const [textFormValue, setTextFormValue] = React.useState("");

    const onChange = (event) => {
        setTextFormValue(event.target.value)
    }

    const oncancel = () =>{
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(textFormValue);
        setOpenModal(false);
    }

    return(
        <div className="modal-div">
                <form onSubmit={onSubmit}>
                <p className="modal-p">Escribe un nuevo TODOs</p> 
                <textarea value={textFormValue} onChange={onChange}  className="modal-input" placeholder="Hacer la tarea de ingles"></textarea>
                <button type="button" className="modal-button-cerrar" onClick={oncancel}>Cancelar</button>
                <button type="submit" className="modal-button-añadir" onClick={onSubmit}>Añadir</button> 
                </form>
                </div>
    );
}

export {Todoform};