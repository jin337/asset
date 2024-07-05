import {} from 'react'
import { Button, Card, Table } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'

const Subentry = () => {
  const columns = [
    {
      title: '分项编号',
      dataIndex: 'index',
      render: (text, item, index) => index + 1,
    },
    {
      title: '分项名称',
      dataIndex: 'name',
    },
    {
      title: '是否招标',
      dataIndex: 'name1',
    },
    {
      title: '招标范国',
      dataIndex: 'name2',
    },
    {
      title: '招标方式',
      dataIndex: 'name3',
    },
    {
      title: '招标估算金额(万元)',
      dataIndex: 'name4',
    },
    {
      title: '合同数',
      dataIndex: 'name5',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: () => <Button type='text'>查看</Button>,
    },
  ]
  const data = [
    {
      key: '1',
      name: '勘察',
      name1: '是',
      name2: '全部',
      name3: '公开',
      name4: '42.47',
      name5: 1,
    },
    {
      key: '2',
      name: '设计',
      name1: '是',
      name2: '全部',
      name3: '公开',
      name4: '133.97',
      name5: 1,
    },
    {
      key: '3',
      name: '建筑工程',
      name1: '是',
      name2: '部分',
      name3: '公开',
      name4: '100.00',
      name5: 1,
    },
    {
      key: '4',
      name: '安装工程',
      name1: '是',
      name2: '部分',
      name3: '邀请',
      name4: '200.00',
      name5: 1,
    },
    {
      key: '5',
      name: '监理',
      name1: '是',
      name2: '全部',
      name3: '公开',
      name4: '130.01',
      name5: 1,
    },
  ]
  return (
    <>
      <div className='flex justify-between'>
        <div className='text-xl font-bold'>
          分项<span className='ml-8 text-sm font-normal text-blue-500'>共计5个分项，累计招标估算金额12000.00万元</span>
        </div>
        <Button type='primary' size='small' icon={<IconPlus />}>
          新增分项
        </Button>
      </div>

      <Card bordered={false} className='mt-5'>
        <Table columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Card>
    </>
  )
}
export default Subentry
