const InputTodo=()=>{
    return(
        <div className='inputtodo'>
          <input type="text" placeholder='Add todo...' className="inputAdd" name="text" />
          <button type="submit">+</button>
        </div>
    )
  }
  export default InputTodo;