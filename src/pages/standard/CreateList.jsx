import { useState } from 'react'
import {
  Breadcrumb,
  Card,
  Button,
  Table,
  Dropdown,
  Menu,
  Input,
  Tree,
  Modal,
  Form,
  Select,
  Grid,
  Drawer,
  Switch,
  Popconfirm,
  Message,
} from '@arco-design/web-react'
import { IconPlus, IconMore, IconSearch, IconDelete } from '@arco-design/web-react/icon'

const { Row, Col } = Grid
const BreadcrumbItem = Breadcrumb.Item
const FormItem = Form.Item
const TextArea = Input.TextArea

const CreateList = () => {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [formData, setFormData] = useState({})

  const dropList = (
    <Menu>
      <Menu.Item key='1' onClick={() => setVisible(true)}>
        编辑
      </Menu.Item>
      <Menu.Item key='2' onClick={() => setVisible1(true)}>
        配置
      </Menu.Item>
      <Menu.Item key='3'>删除</Menu.Item>
    </Menu>
  )
  const dropList2 = (
    <Menu>
      <Menu.Item key='1' onClick={() => setVisible2(true)}>
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
      title: '序号',
      dataIndex: 'index',
      render: (text, item, index) => index + 1,
    },
    {
      title: '依据类型',
      dataIndex: 'name',
    },
    {
      title: '依据项名称',
      dataIndex: 'name1',
      render: (text) => {
        return <div className='text-sm text-blue-500 font-bold cursor-pointer'>{text}</div>
      },
    },
    {
      title: '概述',
      dataIndex: 'name2',
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
      name: '文件上传',
      name1: '批复文件',
      name2: '请上传批复文件盖章电子件',
    },
    {
      key: '2',
      name: '信息填报',
      name1: '批复信息 ',
      name2: '请填报批复相关信息',
    },
  ]
  const columns2 = [
    {
      title: '序号',
      dataIndex: 'index',
      render: (text, item, index) => index + 1,
    },
    {
      title: '数据项名称',
      dataIndex: 'name',
    },
    {
      title: '类型',
      dataIndex: 'name1',
    },
    {
      title: '提示信息',
      dataIndex: 'name2',
    },
    {
      title: '单行展示',
      dataIndex: 'name3',
    },
    {
      title: '是否必填',
      dataIndex: 'name4',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      render: () => {
        return (
          <Dropdown droplist={dropList2} position='br'>
            <IconMore />
          </Dropdown>
        )
      },
    },
  ]
  const data2 = [
    {
      key: '1',
      name: '项目代码',
      name1: '文本框',
      name2: '请输入项目代码',
      name3: '是',
      name4: '是',
    },
    {
      key: '2',
      name: '批复文号',
      name1: '文本框',
      name2: '请输入批复文号',
      name3: '是',
      name4: '是',
    },
    {
      key: '3',
      name: '批复日期',
      name1: '文本框',
      name2: '请输入批复日期',
      name3: '是',
      name4: '是',
    },
  ]

  const treeData = [
    {
      title: '项目启动文件',
      key: '1',
    },
    {
      title: '项目建设书批复',
      key: '2',
    },
    {
      title: '道路工程施工',
      key: '3',
      children: [
        {
          title: '道路基层施工',
          key: '3-1',
        },
        {
          title: '道路面层施工',
          key: '3-2',
        },
      ],
    },
  ]

  const onSelectTree = (e) => {
    console.log('当前点击：', e)
  }

  return (
    <div className='m-5'>
      <div className='flex items-center'>
        <div className='text-2xl font-bold mr-6'>标准配置</div>
        <Breadcrumb style={{ fontSize: 16 }}>
          <BreadcrumbItem>载体办公设施建设</BreadcrumbItem>
          <BreadcrumbItem style={{ color: '#3b82f6' }}>载体办公设施建设1</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className='mt-5 flex content-between'>
        <Card className='w-1/4' bordered={false} title='关键工作' extra={<IconPlus onClick={() => setVisible3(true)} />}>
          <Input suffix={<IconSearch />} placeholder='请输入关键字' allowClear />
          <Tree
            className='mt-2'
            blockNode
            onSelect={onSelectTree}
            defaultSelectedKeys={['1']}
            treeData={treeData}
            renderExtra={(node) => {
              return (
                <div style={{ position: 'absolute', right: 8, top: 6 }}>
                  <IconPlus onClick={() => setVisible3(true)} />
                  {node.isLeaf && (
                    <Popconfirm
                      focusLock
                      title='提示'
                      content='是否删除当前项'
                      onOk={() => {
                        Message.success({
                          content: '已删除',
                        })
                      }}>
                      <IconDelete className='ml-2' />
                    </Popconfirm>
                  )}
                </div>
              )
            }}></Tree>
        </Card>

        <Card
          className='w-3/4 ml-10'
          bordered={false}
          title='依据项'
          extra={
            <Button icon={<IconPlus />} type='primary' size='mini' onClick={() => setVisible(true)}>
              新建依据项
            </Button>
          }>
          <Table className='mt-5' columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
        </Card>
      </div>

      <Modal
        style={{ width: '500px' }}
        title='新建工作'
        visible={visible3}
        onOk={() => setVisible3(false)}
        onCancel={() => setVisible3(false)}
        okText='保存'
        cancelText='取消'>
        <Form form={form} labelCol={{ style: { flexBasis: 80 } }} wrapperCol={{ style: { flexBasis: 'calc(100% - 80px)' } }}>
          <FormItem label='工作名称' field='key5'>
            <Input placeholder='输入' allowClear />
          </FormItem>
        </Form>
      </Modal>

      {/* 新建依据项 */}
      <Drawer
        style={{ width: '800px' }}
        title='新建依据项'
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        okText='保存'
        cancelText='取消'>
        <Form
          onValuesChange={(changeValue, values) => setFormData(values)}
          form={form}
          autoComplete='off'
          labelCol={{ style: { flexBasis: 120 } }}
          wrapperCol={{ style: { flexBasis: 'calc(100% - 120px)' } }}>
          <FormItem label='依据项名称' field='key1'>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <Row>
            <Col span={11}>
              <FormItem label='依据选择' field='key3'>
                <Select options={options} allowClear />
              </FormItem>
            </Col>
            <Col span={11} offset={2}>
              <FormItem label='是否是施工依据' field='key4'>
                <Switch checkedText='是' uncheckedText='否' />
              </FormItem>
            </Col>
          </Row>
          {formData.key4 && (
            <Row>
              <Col span={11}>
                <FormItem label='是否加水印' field='key5'>
                  <Switch checkedText='是' uncheckedText='否' />
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label='水印内容' field='key6'>
                  <Input placeholder='输入' allowClear />
                </FormItem>
              </Col>
            </Row>
          )}
          <FormItem label='备注' field='key12'>
            <TextArea placeholder='请输入内容' allowClear />
          </FormItem>
        </Form>
      </Drawer>

      {/* 数据项配置 */}
      <Drawer
        style={{ width: '800px' }}
        title='数据项配置'
        visible={visible1}
        footer={null}
        onOk={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}>
        <div className='text-right'>
          <Button icon={<IconPlus />} type='primary' size='mini' onClick={() => setVisible2(true)}>
            新建数据项
          </Button>
        </div>
        <Table className='mt-5' columns={columns2} data={data2} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Drawer>

      <Modal
        style={{ width: '800px' }}
        title='新建数据项'
        visible={visible2}
        onOk={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
        okText='保存'
        cancelText='取消'>
        <Form form={form} labelCol={{ style: { flexBasis: 110 } }} wrapperCol={{ style: { flexBasis: 'calc(100% - 110px)' } }}>
          <Row>
            <Col span={11}>
              <FormItem label='数据项名称' field='key1' required>
                <Input placeholder='输入' allowClear />
              </FormItem>
            </Col>
            <Col span={11} offset={2}>
              <FormItem label='类型' field='key2'>
                <Select options={options} allowClear required />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <FormItem label='是否单行展示' field='key3'>
                <Switch checkedText='是' uncheckedText='否' />
              </FormItem>
            </Col>
            <Col span={11} offset={2}>
              <FormItem label='是否必填' field='key4'>
                <Switch checkedText='是' uncheckedText='否' />
              </FormItem>
            </Col>
          </Row>
          <FormItem label='提示信息' field='key5'>
            <Input placeholder='输入' allowClear />
          </FormItem>
        </Form>
      </Modal>
    </div>
  )
}
export default CreateList
