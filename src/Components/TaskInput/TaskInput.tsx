import { useState } from 'react'
import style from './taskInput.module.scss'
import { TbDatabaseImport } from 'react-icons/tb'
interface TaskInputPops {
  hanldeAdd: (name: string) => void
}
export default function TaskInput(props: TaskInputPops) {
  const { hanldeAdd } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    hanldeAdd(name)
    setName('')
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setName(value)
  }
  return (
    <div>
      <h1 className={style.title}>Todo list typescript</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          className={style.input}
          value={name}
          onChange={onChangeInput}
        />
        <button type='submit' className={style.btn}>
          <TbDatabaseImport />
        </button>
      </form>
    </div>
  )
}
