const TodoItem=(props)=>{
return(
   
      <div className='item-holder'>
      <input type="checkbox" id="itemcheck"/>
    <label for="itemcheck">{props.item}</label>
      <button><i className='fa fa-trash-o' /></button>
      </div>

)}
export default TodoItem;