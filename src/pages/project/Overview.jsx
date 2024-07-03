import {} from 'react'
import { Card, Avatar, Descriptions } from '@arco-design/web-react'
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
const Overview = () => {
  return (
    <>
      <div className='text-xl font-bold'>概况</div>

      <div className='flex mt-5'>
        {gridCardList.map((item) => (
          <Card bordered={false} key={item.key} className='w-1/4'>
            <div className='flex items-center'>
              {item.icon}
              <div className='ml-3'>
                <div className='mb-1'>{item.title}</div>
                <div>
                  <span className='text-xl font-bold'>{item.type ? item.type : item.price}</span>
                  <span className='ml-2'>{item.unit}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card bordered={false} className='mt-5' title='基本项目信息' extra='修改'>
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
                  <div className='mt-2'>形象进度</div>
                  <div className='text-xl font-bold'>{item.type}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </>
  )
}
export default Overview
