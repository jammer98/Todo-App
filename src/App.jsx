import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts" 
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"



function App() {
 
  // we took the same name in state bcz state returns a array and our todo_properties also returns a array of strings 
  const [todos,setTodos] = useState([])

  // we will define the functions which gives the functionalty to the dom 
  // the functions defined at context default values 

  const addtodo = (todo)=>{
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])
  }

  const updatetodo = (id,todo)=>{
    setTodos((prev) => prev.map((x) => x.id
      === id ? {...x,...todo} : x ))
  }

  const deletetodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id ))
    // this filter means that filter all the todos with the the id not equal to the given id in the function 
  }

  const toggle_complete = (id) =>{
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === 
    id ? {...prevtodo,completed : !prevtodo.completed}: prevtodo ))
  }

  useEffect(() =>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0 )
      setTodos(todos)

  },[])

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addtodo,updatetodo,deletetodo,toggle_complete}}>
      {/* these values are u nder two curly brackets bcz we are destructuring the values present in the context via provider */}
     <div className="bg-[#172842] min-h-screen py-8 flex justify-center items-center">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg  text-white bg-black p-6">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map(todo => (
                          <div key={todo.id} className="w-full">
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
     </TodoProvider>
  )
}

export default App
