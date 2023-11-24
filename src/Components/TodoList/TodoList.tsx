import TaskInput from '../TaskInput'
import TaskList from '../TaskList/TaskList'
import style from './todoList.module.scss'
export default function TodoList() {
  return (
    <div className={style.todoList}>
      <div className={style.todoListContainer}>
        <TaskInput />
        <TaskList doneTaskList={false} />
        <TaskList doneTaskList />
      </div>
    </div>
  )
}
