import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import Addtodo from './MyComponents/Addtodo';
import { useState } from 'react';

function App() {
  const addTodo = (title,desc) => {
    console.log("Below todo added");
    let sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const onDelete = (todo) => {
    console.log("Below todo deleted", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos,setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    { 
      sno: 2,
      title: "Wash your clothes",
      desc: "You need to do this before 2pm"
    },
    {
      sno: 3,
      title: "Call Mom",
      desc: "Remind about tomorrow"
    }
  ]);

  return (
    <>
      <Header title = "My Todo List"/>
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
