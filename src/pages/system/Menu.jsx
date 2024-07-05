import { useState } from 'react'
import {
  Button,
  Card,
  Modal,
  Table,
  Dropdown,
  Menu,
  Drawer,
  Descriptions,
  Form,
  Input,
  Switch,
  InputNumber,
  Select,
} from '@arco-design/web-react'
import { IconPlus, IconMore } from '@arco-design/web-react/icon'

const FormItem = Form.Item
const TextArea = Input.TextArea
const MenuSystem = () => {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

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
  const dropList = (
    <Menu>
      <Menu.Item key='1' onClick={() => setVisible(true)}>
        编辑
      </Menu.Item>
      <Menu.Item key='2' onClick={() => setVisible(true)}>
        新增子菜单
      </Menu.Item>
      <Menu.Item key='3' onClick={() => setVisible1(true)}>
        按钮管理
      </Menu.Item>
      <Menu.Item key='4'>删除</Menu.Item>
    </Menu>
  )
  const columns = [
    {
      title: '菜单名称',
      dataIndex: 'name1',
    },
    {
      title: '图标',
      dataIndex: 'name2',
    },
    {
      title: '排序',
      dataIndex: 'name3',
    },
    {
      title: '权限标识',
      dataIndex: 'name4',
    },
    {
      title: '请求地址',
      dataIndex: 'name5',
    },
    {
      title: '组件路径',
      dataIndex: 'name6',
    },
    {
      title: '是否隐藏',
      dataIndex: 'name7',
    },
    {
      title: '是否外链',
      dataIndex: 'name7',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: () => (
        <Dropdown droplist={dropList} position='br'>
          <IconMore />
        </Dropdown>
      ),
    },
  ]
  const data = [
    {
      key: '1',
      name1: '工作台',
      name2: 'dashboard',
      name3: 1,
      name4: 'dashboard',
      name5: '/dashboard',
      name6: 'src/dashboard',
      name7: '否',
    },
    {
      key: '2',
      name1: '项目',
      name2: 'project',
      name3: 1,
      name4: 'project',
      name5: '/project',
      name6: 'src/project',
      name7: '否',
    },
    {
      key: '3',
      name1: '标准',
      name2: 'standard',
      name3: 1,
      name4: 'standard',
      name5: '/standard',
      name6: 'src/standard',
      name7: '否',
    },
    {
      key: '4',
      name1: '标准',
      name2: 'standard',
      name3: 1,
      name4: 'standard',
      name5: '/standard',
      name6: 'src/standard',
      name7: '否',
    },
    {
      key: '5',
      name1: '用户',
      name2: 'user',
      name3: 1,
      name4: 'user',
      name5: '/user',
      name6: 'src/user',
      name7: '否',
    },
    {
      key: '6',
      name1: '分析',
      name2: 'analyse',
      name3: 1,
      name4: 'analyse',
      name5: '/analyse',
      name6: 'src/analyse',
      name7: '否',
    },
    {
      key: '7',
      name1: '系统',
      name2: 'system',
      name3: 1,
      name4: 'system',
      name5: '/system',
      name6: 'src/system',
      name7: '否',
      children: [
        {
          key: '7-1',
          name1: '菜单',
          name2: 'menu',
          name3: 1,
          name4: 'menu',
          name5: '/system/menu',
          name6: 'src/system/menu',
          name7: '否',
        },
        {
          key: '7-2',
          name1: '部门',
          name2: 'department',
          name3: 1,
          name4: 'department',
          name5: '/system/department',
          name6: 'src/system/department',
          name7: '否',
        },
        {
          key: '7-3',
          name1: '角色',
          name2: 'role',
          name3: 1,
          name4: 'role',
          name5: '/system/role',
          name6: 'src/system/role',
          name7: '否',
        },
        {
          key: '7-4',
          name1: '字典',
          name2: 'dictionaries',
          name3: 1,
          name4: 'dictionaries',
          name5: '/system/dictionaries',
          name6: 'src/system/dictionaries',
          name7: '否',
        },
      ],
    },
  ]

  const columnsBtn = [
    {
      title: '按钮名称',
      dataIndex: 'name1',
    },
    {
      title: '权限规则',
      dataIndex: 'name2',
    },
    {
      title: '显示排序',
      dataIndex: 'name3',
    },
    {
      title: '备注',
      dataIndex: 'name4',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: () => (
        <Dropdown droplist={dropList} position='br'>
          <IconMore />
        </Dropdown>
      ),
    },
  ]
  const dataBtn = []

  const DescriptionsData = [
    {
      label: '菜单名称',
      value: '工作台',
    },
    {
      label: '图标',
      value: 'dashboard',
    },
    {
      label: '排序',
      value: '1',
    },
    {
      label: '权限标识',
      value: 'dashboard',
    },
    {
      label: '请求地址',
      value: '/dashboard',
    },
    {
      label: '组件路径',
      value: 'src/dashboard',
    },
    {
      label: '是否隐藏',
      value: '否',
    },
  ]
  return (
    <>
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>菜单管理</div>
        <Button icon={<IconPlus />} type='primary' onClick={() => setVisible(true)}>
          新建菜单
        </Button>
      </div>
      <Card bordered={false} className='mt-5'>
        <Table defaultExpandAllRows columns={columns} data={data} pagination={false} />
      </Card>

      {/* 按钮详情 */}
      <Drawer
        footer={null}
        style={{ width: '800px' }}
        title='按钮详情'
        visible={visible1}
        onOk={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}>
        <Descriptions colon=' :' layout='inline-horizontal' size='large' column={2} data={DescriptionsData} />
        <div className='text-right'>
          <Button icon={<IconPlus />} type='primary' size='mini' onClick={() => setVisible2(true)}>
            新建按钮
          </Button>
        </div>
        <Table className='mt-5' columns={columnsBtn} data={dataBtn} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Drawer>

      {/* 菜单信息 */}
      <Modal
        style={{ width: '800px' }}
        title='菜单信息'
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
          <FormItem label='上级菜单' field='key1'>
            <Select options={options} allowClear />
          </FormItem>
          <div className='flex justify-between'>
            <FormItem label='菜单名称' field='key2' required>
              <Input placeholder='输入' allowClear />
            </FormItem>
            <FormItem label='图标' field='key3'>
              <Input placeholder='输入' allowClear />
            </FormItem>
          </div>
          <div className='flex justify-between'>
            <FormItem label='排序' field='key4'>
              <InputNumber mode='button' />
            </FormItem>
            <FormItem label='权限标识' field='key5'>
              <Input placeholder='输入' allowClear />
            </FormItem>
          </div>
          <div className='flex justify-between'>
            <FormItem label='请求地址' field='key6' required>
              <Input placeholder='输入' allowClear />
            </FormItem>
            <FormItem label='组件路径' field='key7' required>
              <Input placeholder='输入' allowClear />
            </FormItem>
          </div>
          <div className='flex justify-between'>
            <FormItem label='是否隐藏' field='key8'>
              <Switch checkedText='是' uncheckedText='否' />
            </FormItem>
            <FormItem label='是否外链' field='key9'>
              <Switch checkedText='是' uncheckedText='否' />
            </FormItem>
          </div>
          <FormItem label='描述' field='key10'>
            <TextArea placeholder='请输入内容' allowClear />
          </FormItem>
        </Form>
      </Modal>
      {/* 菜单信息 */}
      <Modal
        style={{ width: '800px' }}
        title='按钮信息'
        visible={visible2}
        onOk={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
        autoFocus={false}
        focusLock={true}
        okText='提交'
        cancelText='取消'>
        <Form
          form={form}
          autoComplete='off'
          labelCol={{ style: { flexBasis: 120 } }}
          wrapperCol={{ style: { flexBasis: 'calc(100% - 120px)' } }}>
          <FormItem label='上级菜单' field='key1'>
            <Select options={options} allowClear />
          </FormItem>
          <div className='flex justify-between'>
            <FormItem label='按钮名称' field='key2' required>
              <Input placeholder='输入' allowClear />
            </FormItem>
            <FormItem label='权限规则' field='key3'>
              <Input placeholder='输入' allowClear />
            </FormItem>
          </div>
          <FormItem label='显示排序' field='key9'>
            <InputNumber mode='button' />
          </FormItem>
          <FormItem label='描述' field='key10'>
            <TextArea placeholder='请输入内容' allowClear />
          </FormItem>
        </Form>
      </Modal>
    </>
  )
}
export default MenuSystem
