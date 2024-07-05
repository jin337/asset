import { useState } from 'react'
import { Button, Card, Modal, Table, Space } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'

const Role = () => {
  const [visible, setVisible] = useState(false)

  const columns = [
    {
      title: '角色名称',
      dataIndex: 'name1',
    },
    {
      title: '创建时间',
      dataIndex: 'name2',
    },
    {
      title: '备注',
      dataIndex: 'name3',
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
        <div className='text-2xl font-bold'>角色管理</div>
        <Button icon={<IconPlus />} type='primary' onClick={() => setVisible(true)}>
          新建角色
        </Button>
      </div>
      <Card bordered={false} className='mt-5'>
        <Table className='mt-5' columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Card>

      <Modal
        style={{ width: '800px' }}
        title='角色信息'
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
export default Role
