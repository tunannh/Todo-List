import { useDispatch, useSelector } from "react-redux";
import { create, done, remove, undone } from "../../action/todoAction";
import { useRef, useState } from "react";

function Todo() {
  const todo_list = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    var value = e.target.elements.content.value
    if (value !== "") {
      dispatch(create(value));
      inputRef.current.value = "";
      inputRef.current.focus;
    }
  }

  return (
    <>
      <div className="todo">
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" name="content" placeholder="Thêm công việc" autoFocus/>
            {/* <input type="submit" /> */}
            <button type="submit">+</button>
          </form>
        </div>
        <div className="todo-list">
          {todo_list.map(item => (
            <div className="todo-item" key={item.id}>
              <span>{item.content}</span>
              {item.completed && <span>Done</span>}
              {item.completed? (
                <button onClick={() => dispatch(undone(item.id))}>Undone</button>
              ) : (
                <button onClick={() => dispatch(done(item.id))}>V</button>
              )}
              <button onClick={() => dispatch(remove(item.id))}>X</button>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Todo;