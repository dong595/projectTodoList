import style from './taskInput.module.scss'
import { TbDatabaseImport } from 'react-icons/tb'
export default function TaskInput() {
  return (
    <div>
      <h1 className={style.title}>Todo list typescript</h1>
      <form className={style.form}>
        <input type='text' placeholder='caption goes here' className={style.input} />
        <button type='submit' className={style.btn}>
          <TbDatabaseImport />
        </button>
      </form>
    </div>
  )
}
