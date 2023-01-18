import TodoItem from "./TodoItem";
const TodoList=({items})=>{
    return(
     <div className='item'>
      
       {items.map(el=>{
        return(
          <div>
           <TodoItem item={el}/>
           <TodoItem item="Second Item"/>
           <TodoItem item="Third Item"/>


          </div>

        )
       })}
   
     </div>
    )
     }
export default TodoList;   