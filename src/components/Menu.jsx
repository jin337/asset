import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DynamicIcon from './DynamicIcon'

const Menu = ({ items, header, select }) => {
  const navigate = useNavigate()
  const [active, setActive] = useState(select)

  useEffect(() => {
    setActive(select)
  }, [select])

  const selectHandler = (e) => {
    setActive(e.itemKey)
    navigate(e.path)
  }

  return (
    <div className='h-full overflow-y-auto overflow-x-hidden'>
      <div className='py-2 pt-5 text-center'>{header}</div>
      <ul>
        {items.map((item) => (
          <li
            key={item.itemKey}
            className={`mt-2 cursor-pointer py-2 text-center hover:scale-105 hover:text-blue-500 ${
              active === item.itemKey ? 'scale-105 text-blue-500' : ''
            }`}
            onClick={() => selectHandler(item)}>
            <DynamicIcon className='text-2xl' name={item.iconType} />
            <div className='mt-1 text-sm'>{item.text}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Menu
