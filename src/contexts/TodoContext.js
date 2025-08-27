import React from "react";
import { createContext,useContext } from "react";


//  these are the context (values ,functions)which are provided to different components whenever
// i want to access these values inside a component i can call this context



// whenever i want these inside a compo. which is inside a dozens of comp.
// i can call this context and get access of these values and the functions 
// this help me to escape the prop passing hell 




export const TodoContext = createContext({
    // these are the default values of the createcontext
    // there are some properties of the todo as stated below
    // and there are some functionality functions which we will define later on 
    todos:[{
        // this a single todo property which is in the form of array of objects 
        id:1,
        todo:"todo mssg",
        completed: false
    }],
    // these are the functions which we define the funtionalites of via function
    // these functions will take the above properties and use to manipulate them 

    addtodo: (todo) =>{
        // this function takes todo_title as a parameter and will do some function which will be responsible for the functionaity
    },
    // one more function 
    updatetodo :(id,todo) =>{
        // this function takes and id of the todo which we have to update and update here means changing the todo's title
    },
    deletetodo: (id) =>{},

    toggle_complete: (id) =>{
        // this means toggle or check the todo when we have completed the certain todo
    }

})

export const TodoProvider = TodoContext.Provider

export const useTodo = () =>{
    return useContext(TodoContext);
} 
// this usetodo custom hook uses the usecontext hook which 
// is passed by a todocontext which has been given a context with some values and functions which we can use 
// in any componets and we dont have to call todocontext eveytime for the values 

