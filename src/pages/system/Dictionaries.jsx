import { useState } from 'react'
import { Button, Card, Modal, Table, Space, Form, Input } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'

const FormItem = Form.Item
const TextArea = Input.TextArea
const Dictionaries = () => {
  const [form] = Form.useForm()
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
          extra={
            <Button icon={<IconPlus />} size='mini' type='primary' onClick={() => setVisible(true)}>
              新建字典
            </Button>
          }>
          <Table columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
        </Card>

        <Card bordered={false} className='ml-4 mt-5 w-1/2' title='字典详情'>
          <Table columns={columnsDetails} data={dataDetails} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
        </Card>
      </div>

      <Modal
        style={{ width: '500px' }}
        title='新增字典'
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
        okText='提交'
        cancelText='取消'>
        <Form
          form={form}
          autoComplete='off'
          labelCol={{ style: { flexBasis: 120 } }}
          wrapperCol={{ style: { flexBasis: 'calc(100% - 120px)' } }}>
          <FormItem label='字典名称' field='key1' required>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <FormItem label='字典标签' field='key2' required>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <FormItem label='描述' field='key3' required>
            <TextArea placeholder='请输入内容' allowClear />
          </FormItem>
        </Form>
      </Modal>
    </>
  )
}
export default Dictionaries
