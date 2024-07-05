import { useState } from 'react'
import { Button, Card, Modal, Table, Space } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'

const Dictionaries = () => {
  const [visible, setVisible] = useState(false)
  const columns = [
    {
      title: '字典名称',
      dataIndex: 'name1',
    },
    {
      title: '字典标签',
      dataIndex: 'name2',
    },
    {
      title: '描述',
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

  const columnsDetails = [
    {
      title: '所属字典',
      dataIndex: 'name1',
    },
    {
      title: '字典项',
      dataIndex: 'name2',
    },
    {
      title: '字典值',
      dataIndex: 'name3',
    },
    {
      title: '排序',
      dataIndex: 'name4',
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
  const dataDetails = []

  return (
    <>
      <div className='text-2xl font-bold'>字典管理</div>

      <div className='flex justify-between'>
        <Card
          bordered={false}
          className='mt-5 w-1/2'
          title='字典管理'
          extra={
            <Button icon={<IconPlus />} size='mini' type='primary' onClick={() => setVisible(true)}>
              新建字典
            </Button>
          }>
          <Table className='mt-5' columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
        </Card>

        <Card bordered={false} className='mt-5 w-1/2 ml-4' title='字典详情'>
          <Table
            className='mt-5'
            columns={columnsDetails}
            data={dataDetails}
            pagination={{ showTotal: true, pageSize: 10, current: 1 }}
          />
        </Card>
      </div>

      <Modal
        style={{ width: '800px' }}
        title='字典信息'
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
export default Dictionaries
