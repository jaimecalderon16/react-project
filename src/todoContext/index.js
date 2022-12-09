import React from "react";
import { useLocalStorage } from "../localStorage/useLocalstorage";

const todoContext = React.createContext();

function TodoProvider(props){

    const {
        items: todos,
        loading,
        saveItems: saveTodos,
        error,
    } = useLocalStorage("TODOS_V1", []);
      const [searchValue, setSearchValue] = React.useState("");
    
      const [openModal,setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.complete).length;
      const totalTodos = todos.length
    
      let searchTodos = [];
    
      if( !searchValue.length >= 1){
          searchTodos = todos;
      }else{
          searchTodos = todos.filter(todo => {
             const todoText = todo.text.toLowerCase();
             const searchText = searchValue.toLowerCase();
             return todoText.includes(searchText);
          })
      }
        const addTodo = (text) => {
        const newTodo= [...todos];
        newTodo.push({complete: false, text: text});
        saveTodos(newTodo);
        };
    
          const completeTodo = (text) => {
          const todoIndex =todos.findIndex(todo => todo.text === text)
          const newTodo= [...todos];
          newTodo[todoIndex].complete = true;
          saveTodos(newTodo);
        };
    
      const deleteTodo = (text) => {
       const todoIndex =todos.findIndex(todo => todo.text === text)
       const newTodo= [...todos];
       newTodo.splice(todoIndex, 1);
       saveTodos(newTodo);
    };

    return(
        <todoContext.Provider value={{
            error,
            loading,
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            searchTodos,
            setOpenModal,
            openModal
        }}> {props.children}
        </todoContext.Provider>
    )
}

export{todoContext, TodoProvider};