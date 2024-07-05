import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from '@arco-design/web-react'
import { IconSettings } from '@arco-design/web-react/icon'

const { Sider, Content } = Layout
const MenuItem = Menu.Item

const itemsSider = [
  {
    itemKey: 'menu',
    text: '菜单',
    icon: <IconSettings />,
    path: '/system/menu',
  },
  {
    itemKey: 'department',
    text: '部门',
    icon: <IconSettings />,
    path: '/system/department',
  },
  {
    itemKey: 'role',
    text: '角色',
    icon: <IconSettings />,
    path: '/system/role',
  },
  {
    itemKey: 'dictionaries',
    text: '字典',
    icon: <IconSettings />,
    path: '/system/dictionaries',
  },
]

const System = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedKey, setSelectKey] = useState([])

  useEffect(() => {
    if (location.pathname) {
      let key = location.pathname
      let item = itemsSider.find((e) => e.path === key)
      if (!item) {
        item = itemsSider.find((e) => key.includes(e.path))
      }
      item && setSelectKey([item.itemKey])
    }
  }, [location])

  const onClickMenuItem = (key) => {
    setSelectKey([key])

    const item = itemsSider.find((e) => e.itemKey === key)
    if (item && item.path) {
      navigate(item.path)
    }
  }
  return (
    <Layout className='h-full'>
      <Sider width={120}>
        <Menu selectedKeys={selectedKey} onClickMenuItem={onClickMenuItem}>
          {itemsSider.map((item) => (
            <MenuItem key={item.itemKey}>
              {item.icon}
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </Sider>

      <Content className='p-5'>
        <Outlet />
      </Content>
    </Layout>
  )
}
export default System
