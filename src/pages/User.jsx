import { useState } from 'react'
import { Grid, Card, Button, Table, Dropdown, Menu, Form, Input, Select, Switch, Modal } from '@arco-design/web-react'
import { IconPlus, IconMore, IconSearch } from '@arco-design/web-react/icon'

const { Row, Col } = Grid
const FormItem = Form.Item

const User = () => {
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()

  const dropList = (
    <Menu>
      <Menu.Item key='1'>编辑</Menu.Item>
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
      dataIndex: 'owner',
    },
    {
      title: '用户名',
      dataIndex: 'name1',
    },
    {
      title: '角色',
      dataIndex: 'name2',
      render: (text) => {
        return <div className='ml-6 text-sm text-blue-500 font-bold cursor-pointer'>{text}</div>
      },
    },
    {
      title: '状态',
      dataIndex: 'name3',
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
      owner: 'admin',
      name1: '张三',
      name2: '管理员',
      name3: '正常',
    },
    {
      key: '2',
      owner: 'BZ1002',
      name1: '管理员 ',
      name2: '资管员',
      name3: '正常',
    },
  ]

  return (
    <div className='m-5'>
      <Row align='center'>
        <Col span={12}>
          <div className='flex items-center'>
            <div className='text-2xl font-bold'>用户管理</div>
          </div>
        </Col>
        <Col span={12} className='text-right'>
          <Button icon={<IconPlus />} type='primary' onClick={() => setVisible(true)}>
            新建用户
          </Button>
        </Col>
      </Row>

      <Card bordered={false} className='mt-5'>
        <Row align='center'>
          <Col span={22}>
            <Form layout='inline'>
              <FormItem field='key4'>
                <Input suffix={<IconSearch />} placeholder='请输入关键字' allowClear />
              </FormItem>
            </Form>
          </Col>
        </Row>

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
          <FormItem label='用户账号' field='key1' rules={[{ required: true }]}>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <FormItem label='用户名' field='key2' rules={[{ required: true }]}>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <FormItem label='角色' field='key5' rules={[{ required: true }]}>
            <Select options={options} allowClear />
          </FormItem>
          <FormItem label='状态' field='key12' rules={[{ required: true }]}>
            <Switch checkedText='开' uncheckedText='关' />
          </FormItem>
        </Form>
      </Modal>
    </div>
  )
}
export default User
