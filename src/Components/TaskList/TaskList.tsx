import style from './taskList.module.scss'
import { HiMiniPencilSquare } from 'react-icons/hi2'
import { FaRegTrashAlt } from 'react-icons/fa'
import { ITodo } from '../../@types/todo.type'
interface TaskListprops {
  doneTaskList?: boolean
  todos: ITodo[]
  handleDone: (id: string, done: boolean) => void
}

export default function TaskList(props: TaskListprops) {
  const { doneTaskList, todos, handleDone } = props
  return (
    <>
      <h2 className={style.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa Hoàn thành'}</h2>
      <div className={style.tasks}>
        {todos.map((todo) => (
          <div className={style.task} key={todo.id}>
            <div className={style.info}>
              <input
                type='checkbox'
                className={style.input}
                checked={todo.done}
                onChange={(event) => handleDone(todo.id, event?.target.checked)}
              />
              <span className={style.name}>{todo.name}</span>
            </div>
            <div className={style.action}>
              <button className={style.taskBtn} type='submit'>
                <HiMiniPencilSquare />
              </button>
              <button className={style.taskBtn} type='submit'>
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
