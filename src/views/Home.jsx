import { useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from '../store/reducers/common'
import { setMainMenu } from '../store/reducers/system'

import {
  Layout,
  Image,
  Grid,
  Space,
  Avatar,
  Button,
  Breadcrumb,
  Popover,
  Input,
  List,
  Dropdown,
  Menu,
} from '@arco-design/web-react'

import {
  IconSearch,
  IconNotification,
  IconSun,
  IconClose,
  IconMoon,
  IconMenu,
  IconDown,
  IconCopy,
} from '@arco-design/web-react/icon'

const { Sider, Header, Content } = Layout
const { Row, Col } = Grid

import SystemMenu from '../components/Menu'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const common = useSelector((state) => state.common)
  const system = useSelector((state) => state.system)
  const [menuSelect, setMenuSelect] = useState()
  const [theme, setTheme] = useState()
  const [collapse, setCollapse] = useState(false)
  const [isProject, setIsProject] = useState(false)

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
      setIsProject(key.includes('/project-dashboard/'))
      item && setMenuSelect(item.itemKey)
    }
  }, [location, system.mainMenu])

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

  const content = (
    <>
      <Input suffix={<IconSearch />} placeholder='请输入关键字' allowClear />
      <List
        size='small'
        bordered={false}
        pagination={{ pageSize: 3 }}
        dataSource={[
          'Beijing Bytedance Technology Co., Ltd.',
          'Bytedance Technology Co., Ltd.',
          'Beijing Toutiao Technology Co., Ltd.',
          'Beijing Volcengine Technology Co., Ltd.',
          'China Beijing Bytedance Technology Co., Ltd.',
        ]}
        render={(item, index) => (
          <List.Item key={index}>
            <IconCopy className='mr-1' />
            {item}
          </List.Item>
        )}
      />
    </>
  )
  return (
    <Layout className='w-screen h-screen bg-neutral-100 dark:bg-neutral-950'>
      <Sider width={80} collapsible trigger={null} collapsed={collapse} collapsedWidth={0}>
        <SystemMenu
          select={menuSelect}
          items={system.mainMenu}
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
              {isProject ? (
                <div className='flex items-center'>
                  {collapse ? (
                    <IconMenu className='text-xl mr-2 cursor-pointer' onClick={() => setCollapse(!collapse)} />
                  ) : (
                    <IconClose className='text-xl mr-2 cursor-pointer' onClick={() => setCollapse(!collapse)} />
                  )}
                  <Breadcrumb maxCount='3'>
                    <Breadcrumb.Item>项目</Breadcrumb.Item>
                    <Breadcrumb.Item>
                      纬六路、经十八路、恒竞路建设工程
                      <Popover position='bl' content={content} unmountOnExit={false}>
                        <IconDown className='ml-1 cursor-pointer' />
                      </Popover>
                    </Breadcrumb.Item>
                  </Breadcrumb>
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
                <Dropdown
                  position='br'
                  droplist={
                    <Menu>
                      <Menu.Item key='2'>用户信息</Menu.Item>
                      <Menu.Item key='3' onClick={() => navigate('/login')}>
                        退出
                      </Menu.Item>
                    </Menu>
                  }>
                  <Avatar size={32} style={{ backgroundColor: '#3370ff' }} className='cursor-pointer'>
                    admin
                  </Avatar>
                </Dropdown>
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
