import { useState } from 'react'
import { Card, Button, Table, Dropdown, Menu, Form, Input, Select, Switch, Modal } from '@arco-design/web-react'
import { IconPlus, IconMore, IconSearch } from '@arco-design/web-react/icon'

const FormItem = Form.Item

const User = () => {
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()

  const dropList = (
    <Menu>
      <Menu.Item key='1' onClick={() => setVisible(true)}>
        编辑
      </Menu.Item>
      <Menu.Item key='2'>删除</Menu.Item>
    </Menu>
  )
  const options = [
    {
      label: 'one',
      value: 0,
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
  const columns = [
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
      render: (text) => {
        return <div className='text-sm text-blue-500 cursor-pointer'>{text}</div>
      },
    },
    {
      title: '部门',
      dataIndex: 'name3',
    },
    {
      title: '状态',
      dataIndex: 'name4',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      render: () => {
        return (
          <Dropdown droplist={dropList} position='br'>
            <IconMore />
          </Dropdown>
        )
      },
    },
  ]
  const data = [
    {
      key: '1',
      name: 'admin',
      name1: '张三',
      name2: '管理员',
      name3: '研发部',
      name4: '正常',
    },
    {
      key: '2',
      name: 'BZ1002',
      name1: '管理员 ',
      name2: '资管员',
      name3: '行政部',
      name4: '正常',
    },
  ]

  return (
    <div className='m-5'>
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>用户管理</div>
        <Button icon={<IconPlus />} type='primary' onClick={() => setVisible(true)}>
          新建用户
        </Button>
      </div>

      <Card bordered={false} className='mt-5'>
        <Form layout='inline'>
          <FormItem field='key4'>
            <Input suffix={<IconSearch />} placeholder='请输入关键字' allowClear />
          </FormItem>
        </Form>

        <Table className='mt-5' columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Card>

      <Modal
        style={{ width: '800px' }}
        title='用户信息'
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
        okText='提交'
        cancelText='取消'>
        <Form form={form} labelCol={{ style: { flexBasis: 100 } }} wrapperCol={{ style: { flexBasis: 'calc(100% - 100px)' } }}>
          <FormItem label='用户账号' field='key1' required>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <FormItem label='用户名' field='key2' required>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <div className='flex'>
            <FormItem label='角色' field='key3' required>
              <Select options={options} allowClear />
            </FormItem>
            <FormItem label='部门' field='key4' required>
              <Select options={options} allowClear />
            </FormItem>
          </div>
          <FormItem label='状态' field='key5' required>
            <Switch checkedText='开' uncheckedText='关' />
          </FormItem>
        </Form>
      </Modal>
    </div>
  )
}
export default User
