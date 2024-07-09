import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Layout, Menu } from '@arco-design/web-react'
import DynamicIcon from '../../components/DynamicIcon'

const { Sider, Content } = Layout
const MenuItem = Menu.Item

const ProjectDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const common = useSelector((state) => state.common)
  const [itemsSider, setItemsSider] = useState([])
  const [selectedKey, setSelectKey] = useState([])

  useEffect(() => {
    const item = common.mainMenu?.find((e) => e.itemKey === 'project')
    item && setItemsSider(item.children)
  }, [common.mainMenu])

  useEffect(() => {
    if (location.pathname) {
      let key = location.pathname
      let item = itemsSider.find((e) => e.path === key)
      if (!item) {
        item = itemsSider.find((e) => key.includes(e.path))
      }
      item && setSelectKey([item.itemKey])
    }
  }, [itemsSider, location])

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
              <DynamicIcon name={item.iconType} />
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
export default ProjectDashboard
