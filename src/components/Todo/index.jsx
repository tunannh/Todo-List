import { useDispatch, useSelector } from "react-redux";
import { create, done, remove, undone } from "../../action/todoAction";
import { useRef, useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import "./Todo.css"

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
      <div className="container">
        <div className="todo">

          <div className="add-todo">
            <h1>My To Do List</h1>
            <form action="" onSubmit={handleSubmit}>
              <input ref={inputRef} type="text" name="content" placeholder="Thêm công việc" autoFocus />
              <button type="submit" className="button button-add"><IoAddSharp /></button>
            </form>
          </div>

          {todo_list.length >= 1 ? (
            <div className="todo-list">
              {todo_list.map(item => (
                <div className="todo-item" key={item.id}>
                  {/* {item.completed && <span className="done"><MdOutlineDone /></span>} */}

                  <span className={"content " + (item.completed ? ("bg-green") : (""))} >{item.content}</span>

                  <div className="right">
                    {item.completed ? (
                      <span className="complete" onClick={() => dispatch(undone(item.id))}>Đặt lại</span>
                    ) : (
                      <span className="complete" onClick={() => dispatch(done(item.id))}>Xong</span>
                    )}

                    <span className="remove" onClick={() => dispatch(remove(item.id))}>Xóa</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h2 className="empty">Danh sách rỗng</h2>
          )}

        </div>
      </div>
    </>
  )
}

export default Todo;