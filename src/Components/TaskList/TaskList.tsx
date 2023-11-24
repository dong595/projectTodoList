import style from './taskList.module.scss'
import { HiMiniPencilSquare } from 'react-icons/hi2'
import { FaRegTrashAlt } from 'react-icons/fa'
interface TaskListprops {
  doneTaskList?: boolean
}
export default function TaskList(props: TaskListprops) {
  const { doneTaskList } = props
  return (
    <>
      <h2 className={style.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa Hoàn thành'}</h2>
      <div className={style.task}>
        <div className={style.info}>
          <input type='checkbox' className={style.input} />
          <span className={style.name}>Học bài</span>
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
    </>
  )
}
