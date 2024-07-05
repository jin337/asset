import {} from 'react'
import { Button, Card, Table } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'

const Member = () => {
  const columns = [
    {
      title: '成员编号',
      dataIndex: 'index',
      render: (text, item, index) => index + 1,
    },
    {
      title: '用户账号',
      dataIndex: 'name',
    },
    {
      title: '用户名',
      dataIndex: 'name1',
    },
    {
      title: '角色',
      dataIndex: 'name2',
    },
    {
      title: '状态',
      dataIndex: 'name3',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: () => <Button type='text'>删除</Button>,
    },
  ]
  const data = [
    {
      key: '1',
      name: 'admin',
      name1: '张三',
      name2: '管理员',
      name3: '正常',
    },
    {
      key: '2',
      name: 'BZ1002',
      name1: '管理员 ',
      name2: '资管员',
      name3: '正常',
    },
  ]
  return (
    <>
      <div className='flex justify-between'>
        <div className='text-xl font-bold'>成员</div>
        <Button type='primary' size='small' icon={<IconPlus />}>
          新增成员
        </Button>
      </div>

      <Card bordered={false} className='mt-5'>
        <Table columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Card>
    </>
  )
}
export default Member
