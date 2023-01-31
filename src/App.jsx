import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {useState} from 'react'
import {addTodo, deleteTodo, important, done} from './redux/reducers/todo'


function App() {
  const dispatch = useDispatch()
  const todos = useSelector((store) => store.todos.todos)
// console.log(todos);
    const [todo, setTodo] = useState('')
    const [editFormVisibility, setEditFormVisibility]=useState(false)
    const handleEditClick = () => {
      setEditFormVisibility(true)
    }

  return (
    <div className="App">
      <div>
        <input style={{borderColor: "white", marginRight: '20px'}} onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
        <button style={{padding: '5px', borderRadius: '1px', borderColor: "white"}} onClick={() => {dispatch(addTodo(todo))}}>add</button>
      </div>
      <div>
        <input style={{borderColor: "white", marginRight: '5px'}} type="search" />
        <button style={{padding: '5px', borderRadius: '1px', borderColor: "white" }}>search</button>
      </div>
      <div >
        <ul>
          {todos.map(item => (
            <li key={item.id} className="btn-li" style={{background: item.isImportant ? 'Orange' : '', textDecoration: item.isDone ? 'line-through' : ' ', listStyleType: 'circle', marginButton: '10px'}}>
              {item.title}
              <button style={{margin: "20px 10px", position: 'relative'}} onClick={() => {dispatch(deleteTodo(item.id))}}>delete</button>
              <button onClick={() => {dispatch(important(item.id))}}>important</button>
              <button onClick={() => {dispatch(done(item.id))}}>complete</button>
               
            </li>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default App;