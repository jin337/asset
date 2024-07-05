import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from '@arco-design/web-react'
import { IconSettings } from '@arco-design/web-react/icon'

const { Sider, Content } = Layout
const MenuItem = Menu.Item

const itemsSider = [
  {
    itemKey: 'overview',
    text: '概况',
    icon: <IconSettings />,
    path: '/project-dashboard/overview',
  },
  {
    itemKey: 'fund',
    text: '资金',
    icon: <IconSettings />,
    path: '/project-dashboard/fund',
  },
  {
    itemKey: 'subentry',
    text: '分项',
    icon: <IconSettings />,
    path: '/project-dashboard/subentry',
  },
  {
    itemKey: 'contract',
    text: '合同',
    icon: <IconSettings />,
    path: '/project-dashboard/contract',
  },
  {
    itemKey: 'accord',
    text: '依据',
    icon: <IconSettings />,
    path: '/project-dashboard/accord/document',
  },
  {
    itemKey: 'member',
    text: '成员',
    icon: <IconSettings />,
    path: '/project-dashboard/member',
  },
  {
    itemKey: 'setting',
    text: '配置',
    icon: <IconSettings />,
    path: '/project-dashboard/setting',
  },
]

const ProjectDashboard = () => {
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
export default ProjectDashboard
