import { useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from '../store/reducers/common'

import { Layout, Image, Grid, Space, Avatar, Button, Typography } from '@arco-design/web-react'
import {
  IconDesktop,
  IconUser,
  IconSettings,
  IconFile,
  IconApps,
  IconExperiment,
  IconSearch,
  IconNotification,
  IconSun,
  IconClose,
  IconMoon,
} from '@arco-design/web-react/icon'

const { Sider, Header, Content } = Layout
const { Row, Col } = Grid

import Menu from '../components/Menu'

const itemsSider = [
  {
    itemKey: 'dashboard',
    text: '工作台',
    icon: <IconDesktop style={{ fontSize: '24px' }} />,
    path: '/dashboard',
  },
  {
    itemKey: 'project',
    text: '项目',
    icon: <IconApps style={{ fontSize: '24px' }} />,
    path: '/project',
  },
  {
    itemKey: 'standard',
    text: '标准',
    icon: <IconFile style={{ fontSize: '24px' }} />,
    path: '/standard',
  },
  {
    itemKey: 'user',
    text: '用户',
    icon: <IconUser style={{ fontSize: '24px' }} />,
    path: '/user',
  },
  {
    itemKey: 'analyse',
    text: '分析',
    icon: <IconExperiment style={{ fontSize: '24px' }} />,
    path: '/analyse',
  },
  {
    itemKey: 'system',
    text: '系统',
    icon: <IconSettings style={{ fontSize: '24px' }} />,
    path: '/system',
  },
]

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const project = useSelector((state) => state.project)
  const common = useSelector((state) => state.common)
  const [menuSelect, setMenuSelect] = useState()
  const [theme, setTheme] = useState()

  // 判断导航选中
  useEffect(() => {
    if (location.pathname) {
      let key = location.pathname
      let item = itemsSider.find((e) => e.path === key)
      if (!item) {
        item = itemsSider.find((e) => key.includes(e.path))
      }
      item && setMenuSelect(item.itemKey)
    }
  }, [location])

  // 判断主题
  useEffect(() => {
    const key = sessionStorage.getItem('theme') ? sessionStorage.getItem('theme') : common.theme
    setTheme(key)

    const body = document.body
    if (key === 'light') {
      body.removeAttribute('arco-theme')
    } else {
      body.setAttribute('arco-theme', 'dark')
    }
  }, [common.theme])

  // 清除header标题
  const clearTitle = () => {
    navigate('/project')
  }

  // 切换主题
  const checkTheme = () => {
    const body = document.body
    if (body.hasAttribute('arco-theme')) {
      body.removeAttribute('arco-theme')
    } else {
      body.setAttribute('arco-theme', 'dark')
    }

    const key = theme === 'light' ? 'dark' : 'light'
    setTheme(key)
    dispatch(switchTheme(key))
  }

  return (
    <Layout className='w-screen h-screen bg-neutral-100 dark:bg-neutral-950'>
      <Sider width={80}>
        <Menu
          select={menuSelect}
          items={itemsSider}
          header={
            <Image
              preview={false}
              width={50}
              src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract.jpg'
            />
          }
        />
      </Sider>
      <Layout>
        <Header className='dark:bg-[#232324] dark:border-zinc-500/100 bg-white border-b px-6 py-4'>
          <Row gutter={24} align='center'>
            <Col span={12}>
              {project.title ? (
                <div className='flex items-center'>
                  <IconClose className='cursor-pointer' style={{ color: '#999' }} onClick={clearTitle} />
                  <Typography.Text type='secondary' bold>
                    &nbsp;{project.title}
                  </Typography.Text>
                </div>
              ) : (
                <div className='text-xl font-bold'>项目资管平台</div>
              )}
            </Col>
            <Col span={12} className='text-right'>
              <Space size='medium'>
                <Button shape='round' icon={<IconSearch />} />
                <Button shape='round' icon={<IconNotification />} />
                <Button shape='round' icon={theme === 'light' ? <IconMoon /> : <IconSun />} onClick={checkTheme} />
                <Avatar size={32} style={{ backgroundColor: '#3370ff' }}>
                  A
                </Avatar>
              </Space>
            </Col>
          </Row>
        </Header>
        <Content className='overflow-y-auto'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Home
