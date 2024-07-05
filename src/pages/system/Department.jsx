import { useState } from 'react'
import { Button, Card, Modal, Table, Space } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'

const Department = () => {
  const [visible, setVisible] = useState(false)
  const columns = [
    {
      title: '部门名称',
      dataIndex: 'name1',
    },
    {
      title: '部门简称',
      dataIndex: 'name2',
    },
    {
      title: '排序',
      dataIndex: 'name3',
    },
    {
      title: '状态',
      dataIndex: 'name4',
    },
    {
      title: '施工单位',
      dataIndex: 'name5',
    },
    {
      title: '描述',
      dataIndex: 'name6',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      render: () => (
        <Space>
          <Button type='text' size='mini'>
            编辑
          </Button>
          <Button type='text' size='mini'>
            删除
          </Button>
        </Space>
      ),
    },
  ]
  const data = []
  return (
    <>
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>部门管理</div>
        <Button icon={<IconPlus />} type='primary' onClick={() => setVisible(true)}>
          新建部门
        </Button>
      </div>
      <Card bordered={false} className='mt-5'>
        <Table className='mt-5' columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Card>

      <Modal
        style={{ width: '800px' }}
        title='部门信息'
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
        okText='提交'
        cancelText='取消'></Modal>
    </>
  )
}
export default Department
