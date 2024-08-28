import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
    return (
        <>
            <AddTodo />
            <Todos />
        </>
    );
}

export default App;
// like useContext the provider is wrapped around the component and store is imported
