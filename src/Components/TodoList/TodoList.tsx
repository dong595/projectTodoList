import { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList/TaskList'
import style from './todoList.module.scss'
import { ITodo } from '../../@types/todo.type'
export default function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const doneTodo = todos.filter((todo) => todo.done)
  const notDoneTodo = todos.filter((todo) => !todo.done)
  const hanldeAdd = (name: string) => {
    const todo: ITodo = {
      done: false,
      name,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }
  const handleDone = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }
  console.log(todos)
  return (
    <div className={style.todoList}>
      <div className={style.todoListContainer}>
        <TaskInput hanldeAdd={hanldeAdd} />
        <TaskList todos={notDoneTodo} handleDone={handleDone} />
        <TaskList doneTaskList todos={doneTodo} handleDone={handleDone} />
      </div>
    </div>
  )
}
