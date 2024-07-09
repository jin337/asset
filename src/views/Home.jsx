import { useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from '../store/reducers/common'
import { setMainMenu } from '../store/reducers/system'
import { setProjectID } from '../store/reducers/project'

import {
  Layout,
  Image,
  Space,
  Avatar,
  Button,
  Breadcrumb,
  Popover,
  Input,
  List,
  Dropdown,
  Menu,
  Tabs,
  Divider,
} from '@arco-design/web-react'

import {
  IconSearch,
  IconNotification,
  IconSun,
  IconClose,
  IconMoon,
  IconMenu,
  IconDown,
  IconArchive,
} from '@arco-design/web-react/icon'

const { Sider, Header, Content } = Layout
const TabPane = Tabs.TabPane

import SystemMenu from '../components/Menu'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const common = useSelector((state) => state.common)
  const system = useSelector((state) => state.system)
  const project = useSelector((state) => state.project)

  const [menuSelect, setMenuSelect] = useState()
  const [theme, setTheme] = useState()
  const [collapse, setCollapse] = useState(false)

  // 获取导航数据
  useEffect(() => {
    const arr = [
      {
        sort: 1,
        itemKey: 'dashboard',
        key: 'dashboard',
        text: '工作台',
        iconType: 'IconDesktop',
        path: '/dashboard',
        componenPath: 'pages/Dashboard',
        isOut: 0,
        isHide: 0,
      },
      {
        sort: 2,
        itemKey: 'project',
        key: 'project',
        text: '项目',
        iconType: 'IconApps',
        path: '/project',
        componenPath: 'pages/Project',
        isOut: 0,
        isHide: 0,
      },
      {
        sort: 3,
        itemKey: 'standard',
        key: 'standard',
        text: '标准',
        iconType: 'IconFile',
        path: '/standard',
        componenPath: 'pages/Standard',
        isOut: 0,
        isHide: 0,
      },
      {
        sort: 4,
        itemKey: 'user',
        key: 'user',
        text: '用户',
        iconType: 'IconUser',
        path: '/user',
        componenPath: 'pages/User',
        isOut: 0,
        isHide: 0,
      },
      {
        sort: 5,
        itemKey: 'analyse',
        key: 'analyse',
        text: '分析',
        iconType: 'IconExperiment',
        path: '/analyse',
        componenPath: 'pages/Analyse',
        isOut: 0,
        isHide: 0,
      },
      {
        sort: 6,
        itemKey: 'system',
        key: 'system',
        text: '系统',
        iconType: 'IconSettings',
        path: '/system/menu',
        componenPath: 'pages/System',
        isOut: 0,
        isHide: 0,
        children: [
          {
            sort: 1,
            itemKey: 'menu',
            key: 'menu',
            text: '菜单',
            iconType: 'IconSettings',
            path: '/system/menu',
            componenPath: 'pages/system/Menu',
            isOut: 0,
            isHide: 0,
          },
          {
            sort: 2,
            itemKey: 'role',
            key: 'role',
            text: '角色',
            iconType: 'IconSettings',
            path: '/system/role',
            componenPath: 'pages/system/role',
            isOut: 0,
            isHide: 0,
          },
          {
            sort: 3,
            itemKey: 'department',
            key: 'department',
            text: '部门',
            iconType: 'IconSettings',
            path: '/system/department',
            componenPath: 'pages/system/department',
            isOut: 0,
            isHide: 0,
          },
          {
            sort: 4,
            itemKey: 'dictionaries',
            key: 'dictionaries',
            text: '字典',
            iconType: 'IconSettings',
            path: '/system/dictionaries',
            componenPath: 'pages/system/dictionaries',
            isOut: 0,
            isHide: 0,
          },
        ],
      },
    ]
    dispatch(setMainMenu(arr))
  }, [dispatch])

  // 判断导航选中
  useEffect(() => {
    if (location.pathname) {
      let key = location.pathname
      let item = system.mainMenu.find((e) => e.path === key)
      if (!item) {
        item = system.mainMenu.find((e) => key.includes(e.path))
      }
      if (!key.includes('/project-dashboard/')) {
        dispatch(setProjectID(null))
      } else {
        location.state?.key && dispatch(setProjectID(location.state.key))
      }
      item && setMenuSelect(item.itemKey)
    }
  }, [dispatch, location, system.mainMenu])

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

  // 项目目录
  const projectContent = (
    <>
      <Input suffix={<IconSearch />} placeholder='请输入关键字' allowClear />
      <List
        size='small'
        bordered={false}
        pagination={{ pageSize: 3 }}
        dataSource={project.projectData}
        render={(item, index) => (
          <List.Item key={index} className='cursor-pointer' onClick={() => dispatch(setProjectID(item.key))}>
            <List.Item.Meta avatar={<IconArchive />} title={item.name1} />
          </List.Item>
        )}
      />
    </>
  )

  return (
    <Layout className='h-screen w-screen bg-neutral-100 dark:bg-neutral-950'>
      <Sider width={80} collapsible trigger={null} collapsed={collapse} collapsedWidth={0}>
        <SystemMenu select={menuSelect} items={system.mainMenu} header={<Image preview={false} width={50} src={common.logo} />} />
      </Sider>
      <Layout>
        <Header className='border-b bg-white px-6 py-4 dark:border-zinc-500/100 dark:bg-[#232324]'>
          <div className='flex items-center justify-between'>
            <>
              {project.projectID ? (
                <div className='flex items-center'>
                  {collapse ? (
                    <IconMenu className='mr-2 cursor-pointer text-xl' onClick={() => setCollapse(!collapse)} />
                  ) : (
                    <IconClose className='mr-2 cursor-pointer text-xl' onClick={() => setCollapse(!collapse)} />
                  )}
                  <Breadcrumb maxCount='3'>
                    <Breadcrumb.Item>项目</Breadcrumb.Item>
                    <Breadcrumb.Item>
                      {project.projectData.find((e) => e.key === project.projectID).name1}
                      <Popover position='bl' content={projectContent}>
                        <IconDown className='ml-2 cursor-pointer' />
                      </Popover>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              ) : (
                <div className='text-xl font-bold'>项目资管平台</div>
              )}
            </>
            <Space size='medium'>
              <Input suffix={<IconSearch />} placeholder='搜项目' allowClear />
              <Popover
                position='br'
                content={
                  <Tabs defaultActiveTab='1' type='rounded'>
                    {[
                      { key: 1, title: '消息' },
                      { key: 2, title: '通知' },
                      { key: 3, title: '待办' },
                    ].map((item) => (
                      <TabPane key={item.key} title={item.title}>
                        <List
                          bordered={false}
                          size='small'
                          footer={
                            <div className='flex justify-around text-center'>
                              <div className='w-1/2 cursor-pointer text-sm text-blue-500'>已读</div>
                              <Divider type='vertical' />
                              <div className='w-1/2 cursor-pointer text-sm text-blue-500'>查看更多</div>
                            </div>
                          }
                          dataSource={[
                            'Beijing Bytedance Technology Co., Ltd.',
                            'Bytedance Technology Co., Ltd.',
                            'Beijing Toutiao Technology Co., Ltd.',
                            'Beijing Volcengine Technology Co., Ltd.',
                            'China Beijing Bytedance Technology Co., Ltd.',
                          ]}
                          render={(e, index) => (
                            <List.Item key={index}>
                              {item.key}.{e}
                            </List.Item>
                          )}
                        />
                      </TabPane>
                    ))}
                  </Tabs>
                }>
                <Button shape='round' icon={<IconNotification />} />
              </Popover>
              <Button shape='round' icon={theme === 'light' ? <IconMoon /> : <IconSun />} onClick={checkTheme} />
              <Dropdown
                position='br'
                droplist={
                  <Menu>
                    <Menu.Item key='2'>用户信息</Menu.Item>
                    <Menu.Item key='3' onClick={() => navigate('/login')}>
                      退出登录
                    </Menu.Item>
                  </Menu>
                }>
                <Avatar size={32} style={{ backgroundColor: '#3370ff' }} className='cursor-pointer'>
                  admin
                </Avatar>
              </Dropdown>
            </Space>
          </div>
        </Header>
        <Content className='overflow-y-auto'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Home
