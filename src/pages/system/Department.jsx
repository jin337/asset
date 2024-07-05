import { useState } from 'react'
import { Button, Card, Modal, Table, Space, Form, Input, Select, Switch, InputNumber } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'

const FormItem = Form.Item
const TextArea = Input.TextArea
const Department = () => {
  const [form] = Form.useForm()
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

  const options = [
    {
      label: 'one',
      value: 0,
      children: [
        {
          label: 'one-1',
          value: '0-1',
        },
      ],
    },
    {
      label: 'two',
      value: 1,
    },
    {
      label: 'three',
      value: 2,
    },
  ]
  return (
    <>
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>部门管理</div>
        <Button icon={<IconPlus />} type='primary' onClick={() => setVisible(true)}>
          新建部门
        </Button>
      </div>
      <Card bordered={false} className='mt-5'>
        <Table columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Card>

      <Modal
        style={{ width: '800px' }}
        title='新建部门'
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
          <div className='flex justify-between'>
            <FormItem label='上级部门' field='key1' required>
              <Select options={options} allowClear />
            </FormItem>
            <FormItem label='部门名称' field='key2' required>
              <Input placeholder='输入' allowClear />
            </FormItem>
          </div>
          <div className='flex justify-between'>
            <FormItem label='部门简称' field='key3' required>
              <Input placeholder='输入' allowClear />
            </FormItem>
            <FormItem label='显示排序' field='key4' required>
              <InputNumber mode='button' />
            </FormItem>
          </div>
          <div className='flex justify-between'>
            <FormItem label='施工单位' field='key5' required>
              <Switch checkedText='是' uncheckedText='否' />
            </FormItem>
            <FormItem label='状态' field='key6' required>
              <Switch checkedText='开' uncheckedText='关' />
            </FormItem>
          </div>
          <FormItem label='部门描述' field='key7' required>
            <TextArea placeholder='请输入内容' allowClear />
          </FormItem>
        </Form>
      </Modal>
    </>
  )
}
export default Department
