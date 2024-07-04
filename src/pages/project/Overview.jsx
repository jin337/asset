import { useState } from 'react'
import {
  Card,
  Avatar,
  Descriptions,
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Grid,
  Cascader,
  Button,
} from '@arco-design/web-react'
import { IconSettings } from '@arco-design/web-react/icon'

const gridCardList = [
  {
    key: 1,
    icon: (
      <Avatar>
        <IconSettings className='text-2xl' />
      </Avatar>
    ),
    title: '立项总投资',
    price: 373,
    unit: '万元',
    type: null,
  },
  {
    key: 2,
    icon: (
      <Avatar>
        <IconSettings className='text-2xl' />
      </Avatar>
    ),
    title: '批复投资金额',
    price: 360,
    unit: '万元',
    type: null,
  },
  {
    key: 3,
    icon: (
      <Avatar>
        <IconSettings className='text-2xl' />
      </Avatar>
    ),
    title: '已投资',
    price: 100,
    unit: '万元',
    type: null,
  },
  {
    key: 4,
    icon: (
      <Avatar>
        <IconSettings className='text-2xl' />
      </Avatar>
    ),
    title: '形象进度',
    price: null,
    unit: null,
    type: '开工建设',
  },
]
const childrenCardList = [
  {
    key: 1,
    icon: (
      <Avatar size={32}>
        <IconSettings className='text-xl' />
      </Avatar>
    ),
    title: '兴建路(恒广路-恒竞路)',
    type: '开工建设',
  },
  {
    key: 2,
    icon: (
      <Avatar size={32}>
        <IconSettings className='text-xl' />
      </Avatar>
    ),
    title: '兴建路(恒广路-恒竞路)',
    type: '全部完工',
  },
  {
    key: 3,
    icon: (
      <Avatar size={32}>
        <IconSettings className='text-xl' />
      </Avatar>
    ),
    title: '兴建路(恒广路-恒竞路)',
    type: '全部完工',
  },
]
const DescriptionsData = [
  {
    label: '项目编码',
    value: 'XM1001',
  },
  {
    label: '项目类别',
    value: '新建',
  },
  {
    label: '建设方式',
    value: '自建',
  },
  {
    label: '项目名称',
    value: '纬六路、经十八路、恒竞路建设工程',
    span: 2,
  },
  {
    label: '优先级',
    value: 'A类',
  },
  {
    label: '负责人',
    value: '张三',
  },
  {
    label: '建设年限',
    value: '2023-2024',
  },
  {
    label: '计划开工时间',
    value: '2023年第一季度',
  },
  {
    label: '建设地点',
    value: '江苏省南京市',
  },
  {
    label: '资金来源',
    value: '开发区财政统筹',
    span: 2,
  },
  {
    label: '规模及内容描述',
    value:
      '道路、交通、排水、路灯、管线综合、20 米;恒竞路西起经十八路，东至仙新路，长335 米，宽40 米。绿化等配套附属设施 。纬六路西起经十八路，东至仙新路，长385 米，宽24米;经十八路南起恒竞路，北至恒广路，全长383，宽40 米',
    span: 3,
  },
]
const { RangePicker, QuarterPicker } = DatePicker
const FormItem = Form.Item
const TextArea = Input.TextArea
const { Row, Col } = Grid

const Overview = () => {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const [initialValues] = useState({
    key1: 'XM1001',
    key2: '纬六路、经十八路、恒竞路建设工程',
  })

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
      <div className='text-xl font-bold'>概况</div>

      <div className='flex mt-5'>
        {gridCardList.map((item) => (
          <Card bordered={false} key={item.key} className='w-1/4'>
            <div className='flex items-center'>
              {item.icon}
              <div className='ml-3'>
                <div className='mb-1 text-xs'>{item.title}</div>
                <div>
                  <span className='text-xl font-bold'>{item.type ? item.type : item.price}</span>
                  <span className='ml-2 text-xs'>{item.unit}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card
        bordered={false}
        className='mt-5'
        title='基本项目信息'
        extra={
          <Button type='text' onClick={() => setVisible(true)}>
            修改
          </Button>
        }>
        <Descriptions colon=' :' layout='inline-horizontal' size='large' data={DescriptionsData} />
      </Card>

      <Card
        bordered={false}
        className='mt-5'
        title={
          <div>
            子工程/项目<span className='ml-6 text-blue-500'>项目数（3）</span>
          </div>
        }>
        <div className='flex'>
          {childrenCardList.map((item) => (
            <Card key={item.key} className='w-1/3'>
              <div className='flex items-start'>
                {item.icon}
                <div className='ml-3'>
                  <div className='mb-1'>{item.title}</div>
                  <div className='mt-2 text-xs'>形象进度</div>
                  <div className='text-xl font-bold'>{item.type}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
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
        <Form
          form={form}
          labelCol={{ style: { flexBasis: 120 } }}
          wrapperCol={{ style: { flexBasis: 'calc(100% - 120px)' } }}
          initialValues={initialValues}>
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
    </>
  )
}
export default Overview
