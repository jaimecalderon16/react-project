import React from "react";
import { todoContext } from "../todoContext";
import "./TodoCounter.css";

function TodoCouenter(){

    const {completedTodos,totalTodos}= React.useContext(todoContext);

    return(
        <h3 className="title"> Has completado {completedTodos} de {totalTodos} tareas.</h3>
    );
}

export {TodoCouenter};