import { useState } from 'react'
import {
  Grid,
  Card,
  Button,
  Table,
  Dropdown,
  Menu,
  Form,
  Input,
  Select,
  Modal,
  DatePicker,
  Cascader,
} from '@arco-design/web-react'
import { IconPlus, IconExport, IconMore, IconSearch } from '@arco-design/web-react/icon'

const { Row, Col } = Grid
const { RangePicker, QuarterPicker } = DatePicker
const FormItem = Form.Item
const TextArea = Input.TextArea

const Project = () => {
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()

  const dropList = (
    <Menu>
      <Menu.Item key='1'>置顶</Menu.Item>
      <Menu.Item key='2' onClick={() => setVisible(true)}>
        编辑
      </Menu.Item>
      <Menu.Item key='3'>删除</Menu.Item>
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
      title: '项目编码',
      dataIndex: 'owner',
    },
    {
      title: '项目名称',
      dataIndex: 'name1',
      render: (text) => {
        return <div className='ml-6 text-sm text-blue-500 font-bold cursor-pointer'>{text}</div>
      },
    },
    {
      title: '类型',
      dataIndex: 'name2',
    },
    {
      title: '建设方式',
      dataIndex: 'name3',
    },
    {
      title: '建设类型',
      dataIndex: 'name4',
    },
    {
      title: '形象进度',
      dataIndex: 'name5',
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
      owner: 'XM1001',
      name1: '纬六路、经十八路、恒竞路建设工程',
      name2: '新建',
      name3: '代建',
      name4: '市政基础设施/市政道路',
      name5: '开工建设',
    },
    {
      key: '2',
      owner: 'XM1002',
      name1: '尧辰路以东、栖霞大道以南地块配套新三路一期工程 ',
      name2: '续建',
      name3: '自建',
      name4: '载体办公设施建设',
      name5: '已完工',
    },
  ]

  return (
    <div className='m-5'>
      <Row align='center'>
        <Col span={12}>
          <div className='flex items-center'>
            <div className='text-2xl font-bold mr-6'>项目管理</div>
            <div className='text-base text-blue-500 font-bold'>全部项目（2）</div>
          </div>
        </Col>
        <Col span={12} className='text-right'>
          <Button icon={<IconPlus />} type='primary' onClick={() => setVisible(true)}>
            新建项目
          </Button>
        </Col>
      </Row>

      <Card bordered={false} className='mt-5'>
        <Row align='center'>
          <Col span={22}>
            <Form layout='inline'>
              <FormItem label='类别' field='key1'>
                <Select style={{ width: 150 }} options={options} allowClear />
              </FormItem>
              <FormItem label='建设类型' field='key2'>
                <Cascader style={{ width: 150 }} options={options} allowClear />
              </FormItem>
              <FormItem label='建设方式' field='key3'>
                <Select style={{ width: 150 }} options={options} allowClear />
              </FormItem>
              <FormItem field='key4'>
                <Input suffix={<IconSearch />} placeholder='请输入关键字' allowClear />
              </FormItem>
            </Form>
          </Col>
          <Col span={2} className='text-right'>
            <Button icon={<IconExport />}>导出</Button>
          </Col>
        </Row>

        <Table className='mt-5' columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Card>

      <Modal
        style={{ width: '800px' }}
        title='项目信息'
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
        okText='提交'
        cancelText='取消'>
        <Form form={form} labelCol={{ style: { flexBasis: 120 } }} wrapperCol={{ style: { flexBasis: 'calc(100% - 120px)' } }}>
          <FormItem label='项目编码' field='key1' required>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <FormItem label='项目名称' field='key2' required>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <Row>
            <Col span={11}>
              <FormItem label='项目类别' field='key3' required>
                <Select options={options} allowClear />
              </FormItem>
            </Col>
            <Col span={11} offset={2}>
              <FormItem label='建设方式' field='key4' required>
                <Select options={options} allowClear />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <FormItem label='建设类型' field='key5' required>
                <Cascader options={options} allowClear />
              </FormItem>
            </Col>
            <Col span={11} offset={2}>
              <FormItem label='优先级' field='key6' required>
                <Select options={options} allowClear />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <FormItem label='关联主项目' field='key7'>
                <Select options={options} allowClear />
              </FormItem>
            </Col>
            <Col span={11} offset={2}>
              <FormItem label='负责人' field='key8' required>
                <Select options={options} allowClear />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <FormItem label='建设年限' field='key9'>
                <RangePicker mode='year' allowClear />
              </FormItem>
            </Col>
            <Col span={11} offset={2}>
              <FormItem label='计划开工时间' field='key10'>
                <QuarterPicker allowClear style={{ width: '100%' }} />
              </FormItem>
            </Col>
          </Row>
          <FormItem label='建设地点' field='key11'>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <FormItem label='规模及内容描述' field='key12'>
            <TextArea placeholder='请输入内容' allowClear />
          </FormItem>
        </Form>
      </Modal>
    </div>
  )
}
export default Project
