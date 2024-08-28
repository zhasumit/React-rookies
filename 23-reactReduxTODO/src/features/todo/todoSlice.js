// Slices are the redux reducers(functions) that help making interations with store
// nanoid creates new unique id's
import { createSlice, nanoid } from "@reduxjs/toolkit";

// making initial state of the store which is simply an object
const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello world",
        },
    ],
};

// reducers(functions) provide functionality (slices are bigger reducers bigger functions)
// create slice simply creates slice (slices are methods) (simply JS OBJECT)
const todoSlice = createSlice({
    name: "todo",
    initialState,
    // reducers are methods to be working on current state with some actions
    // state(properties) and actions(performances realated props)

    reducers: {
        // Examples of the reducers
        // addTodo : (state, action) => {}
        // removeTodo : (state, action) => {}
        // updateTodo : (state, action) => {}
        // moveTodo : (state, action) => {}
        // action contains the user passed data (like ids and stuff for manipulation)

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            // since todos (initial state) is an array of obj we push the current state
            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
    },
});

// actions are methods that can be called to trigger reducers
export const { addTodo, removeTodo } = todoSlice.actions; // exporting actions (methods)
export default todoSlice.reducer; // to give it tag of reducers (register as reducer)
