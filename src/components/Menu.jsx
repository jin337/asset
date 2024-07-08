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
    <div className='h-full overflow-hidden'>
      <div className='py-2 pt-5 text-center'>{header}</div>
      <ul>
        {items.map((item) => (
          <li
            key={item.itemKey}
            className={`text-center p-2 mt-2 cursor-pointer hover:scale-105 hover:text-blue-500 ${
              active === item.itemKey ? 'text-blue-500 scale-105' : ''
            }`}
            onClick={() => selectHandler(item)}>
            <DynamicIcon className='text-2xl' name={item.icon} />
            <div className='text-sm mt-1'>{item.text}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Menu
