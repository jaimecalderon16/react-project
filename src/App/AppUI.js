import React from "react";
import { todoContext } from "../todoContext";
import {TodoCouenter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearc";
import { TodoList } from "../TodoList";
import { TodoItems } from "../TodoItems";
import { CreateButtom } from "../CreateButtom";
import { Modal } from "../modal";
import { Todoform } from "../todoForms";

function AppUi(){

    const {error, openModal, setOpenModal,loading, completeTodo, deleteTodo, searchTodos} = React.useContext(todoContext);

    return(
        <React.Fragment>
        <TodoCouenter/>
        <TodoSearch/>
        <TodoList>
        {error && <p>ups! hubo un error...</p> }
        {loading && <p> cargando por favor espera...</p>}
        {(!loading && !searchTodos.length) && <p>todo listo crea un todo...</p>}
           
        {searchTodos.map(todo => (
            <TodoItems
             key={todo.text} 
             text={todo.text} 
             complete={todo.complete}
             onComplete={() => completeTodo(todo.text)}
             onDelete={() => deleteTodo(todo.text)}
             />
             ))}
     
        </TodoList> 

        {!!openModal && (<Modal>
                <Todoform/>
            </Modal> )}

        <CreateButtom/>
        </React.Fragment>
       
    );
}

export {AppUi};