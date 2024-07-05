import {} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Card, Input, Tree, Dropdown, Menu } from '@arco-design/web-react'
import { IconCheckCircleFill, IconSearch, IconFilter } from '@arco-design/web-react/icon'

import { flattenArray } from '../../utils/common'

const Accord = () => {
  const navigate = useNavigate()
  const treeData = [
    {
      title: '项目启动文件',
      key: '1',
      type: 1,
    },
    {
      title: '项目建设书批复',
      key: '2',
      type: 1,
    },
    {
      title: '道路工程施工',
      key: '3',
      children: [
        {
          title: '道路基层施工',
          key: '3-1',
          type: 2,
        },
        {
          title: '道路面层施工',
          key: '3-2',
          type: 2,
        },
      ],
    },
  ]

  const dropList = (
    <Menu>
      <Menu.Item key={'0'}>全部</Menu.Item>
      <Menu.Item key={'1'}>已填报</Menu.Item>
      <Menu.Item key={'2'}>未填报</Menu.Item>
    </Menu>
  )

  // 选中
  const onSelectTree = (e) => {
    const list = flattenArray(treeData, 'children')
    const item = list.find((i) => i.key === e[0])
    if (item.type === 1) {
      navigate('/project-dashboard/accord/document')
    }
    if (item.type === 2) {
      navigate('/project-dashboard/accord/construction')
    }
  }

  return (
    <>
      <div className='text-xl font-bold'>
        依据<span className='ml-8 text-sm font-normal text-blue-500'>市政基础设施/市政道路</span>
      </div>

      <div className='mt-5 flex content-between'>
        <Card className='w-1/4' bordered={false}>
          <div className='flex items-center'>
            <Input suffix={<IconSearch />} placeholder='请输入关键字' allowClear />
            <Dropdown droplist={dropList} position='br'>
              <IconFilter className='ml-3 text-xl' />
            </Dropdown>
          </div>
          <Tree
            className='mt-2'
            blockNode
            onSelect={onSelectTree}
            defaultSelectedKeys={['1']}
            treeData={treeData}
            renderExtra={() => (
              <IconCheckCircleFill style={{ position: 'absolute', right: 8, top: 10, color: '#3b82f6' }} />
            )}></Tree>
        </Card>

        <div className='w-3/4 ml-5'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default Accord
