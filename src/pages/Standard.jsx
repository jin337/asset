import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Table, Dropdown, Menu, Form, Input, Cascader, Modal } from '@arco-design/web-react'
import { IconPlus, IconExport, IconMore, IconSearch } from '@arco-design/web-react/icon'

const FormItem = Form.Item
const TextArea = Input.TextArea

const Standard = () => {
  const navigate = useNavigate()
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
  const columns = [
    {
      title: '标准编码',
      dataIndex: 'name',
    },
    {
      title: '建设类型',
      dataIndex: 'name1',
    },
    {
      title: '标准名称',
      dataIndex: 'name2',
      render: (text) => (
        <div className='cursor-pointer text-sm text-blue-500' onClick={() => navigate('/standard/create-list')}>
          {text}
        </div>
      ),
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
      name: 'BZ1001',
      name1: '市政基础设施/市政道路',
      name2: '市政道路标准1',
      name3: '已发布',
    },
    {
      key: '2',
      name: 'BZ1002',
      name1: '载体办公设施建设 ',
      name2: '载体办公设施建设1',
      name3: '待发布',
    },
  ]

  return (
    <div className='m-5'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <div className='mr-6 text-2xl font-bold'>标准管理</div>
          <div className='text-base font-bold text-blue-500'>全部标准（2）</div>
        </div>
        <Button icon={<IconPlus />} type='primary' onClick={() => setVisible(true)}>
          新建标准
        </Button>
      </div>

      <Card bordered={false} className='mt-5'>
        <div className='flex justify-between'>
          <Form layout='inline'>
            <FormItem label='建设类型' field='key2'>
              <Cascader style={{ width: 150 }} options={options} allowClear />
            </FormItem>
            <FormItem field='key4'>
              <Input suffix={<IconSearch />} placeholder='请输入关键字' allowClear />
            </FormItem>
          </Form>
          <Button icon={<IconExport />}>导出</Button>
        </div>

        <Table className='mt-5' columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Card>

      <Modal
        style={{ width: '800px' }}
        title='标准信息'
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
          <FormItem label='标准编码' field='key1' required>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <FormItem label='标准名称' field='key2' required>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <FormItem label='建设类型' field='key5' required>
            <Cascader options={options} allowClear />
          </FormItem>
          <FormItem label='备注' field='key12'>
            <TextArea placeholder='请输入内容' allowClear />
          </FormItem>
        </Form>
      </Modal>
    </div>
  )
}
export default Standard
