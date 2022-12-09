import React from "react";
import { AppUi } from "./AppUI";
import { TodoProvider } from "../todoContext";
import './App.css';


function App() {

  return (
      <TodoProvider> 
      <AppUi/>
      </TodoProvider>
  );
}

export default App;
