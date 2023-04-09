import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/InputTodo'
import ListTodos from './components/ListTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='mt-5'>PERN TODO</h1>
      <TodoInput />
      <ListTodos />
      </header>
    </div>
  );
}

export default App;
