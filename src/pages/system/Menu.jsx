import { useState } from 'react'
import { useSelector } from 'react-redux'
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
import DynamicIcon from '../../components/DynamicIcon'

const FormItem = Form.Item
const TextArea = Input.TextArea

const MenuSystem = () => {
  const system = useSelector((state) => state.system)
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
  // 菜单管理表头项
  const columns = [
    {
      title: '菜单名称',
      dataIndex: 'text',
    },
    {
      title: '图标',
      dataIndex: 'iconType',
      render: (text) => <DynamicIcon className='text-base' name={text} />,
    },
    {
      title: '排序',
      dataIndex: 'sort',
    },
    {
      title: '权限标识',
      dataIndex: 'itemKey',
    },
    {
      title: '请求地址',
      dataIndex: 'path',
    },
    {
      title: '组件路径',
      dataIndex: 'componenPath',
    },
    {
      title: '是否隐藏',
      dataIndex: 'isHide',
      render: (text) => (text === 1 ? '是' : '否'),
    },
    {
      title: '是否外链',
      dataIndex: 'isOut',
      render: (text) => (text === 1 ? '是' : '否'),
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: () => (
        <Dropdown droplist={dropList} position='br'>
          <DynamicIcon name='IconMore' />
        </Dropdown>
      ),
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
        <Button icon={<DynamicIcon name='IconPlus' />} type='primary' onClick={() => setVisible(true)}>
          新建菜单
        </Button>
      </div>
      <Card bordered={false} className='mt-5'>
        <Table defaultExpandAllRows columns={columns} data={system.mainMenu} pagination={false} />
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
            <Input placeholder='输入' disabled allowClear />
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
            <InputNumber style={{ width: '41%' }} mode='button' />
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
