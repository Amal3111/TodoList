import './index.css';
import Navbar from './Navbar';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList'

const TodoContainer=()=>
{ 
const items=["First Item"];

return(
  <div className='container'>
    <Navbar/>
    <div className='compHolder'>
    <Header mot="todos"/>
    <InputTodo/>
     <TodoList items={items} />
    </div>
    
  
  </div>
 )
}
export default TodoContainer;