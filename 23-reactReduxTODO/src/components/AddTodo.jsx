import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState(""); // for input changes
    const dispatch = useDispatch(); // disptacher for store

    // Here we need to dispatch something given by user (action)
    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input)); // addTodo reducer from the features/todoSlice exported imported in store
        setInput("");
    };

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out text-lg w-2/5 min-w-64"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                add
            </button>
        </form>
    );
}

export default AddTodo;
