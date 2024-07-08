import {} from 'react'
import { Button, Card, Avatar, Table, Space } from '@arco-design/web-react'
import { IconEdit, IconPlus, IconSettings } from '@arco-design/web-react/icon'
import { useState } from 'react'

const CardList = [
  {
    key: 1,
    icon: (
      <Avatar>
        <IconSettings className='text-2xl' />
      </Avatar>
    ),
    title: '立项投资估算金额',
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
    title: '累计完成投资',
    price: 100,
    unit: '万元',
    type: null,
  },
]
const CardList1 = [
  {
    key: 1,
    icon: (
      <Avatar>
        <IconSettings className='text-2xl' />
      </Avatar>
    ),
    title: '立项投资估算金额',
    price: 373,
    unit: '万元',
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
  },
  {
    key: 3,
    icon: (
      <Avatar>
        <IconSettings className='text-2xl' />
      </Avatar>
    ),
    title: '建设资金',
    price: 100,
    unit: '万元',
  },
  {
    key: 4,
    icon: (
      <Avatar>
        <IconSettings className='text-2xl' />
      </Avatar>
    ),
    title: '代建管理费',
    price: 100,
    unit: '万元',
  },
  {
    key: 5,
    icon: (
      <Avatar>
        <IconSettings className='text-2xl' />
      </Avatar>
    ),
    title: '垫付金额',
    price: 100,
    unit: '万元',
  },
  {
    key: 6,
    icon: (
      <Avatar>
        <IconSettings className='text-2xl' />
      </Avatar>
    ),
    title: '进账金额',
    price: 100,
    unit: '万元',
  },
]
const Fund = () => {
  const [type] = useState(1) // 1 or 0
  const [gridCardList] = useState(type ? CardList : CardList1)
  const columns = [
    {
      title: '年度',
      dataIndex: 'name',
      align: 'center',
      width: 70,
    },
    {
      title: '计划投资（万元）',
      children: [
        {
          title: '征地拆迁费用',
          dataIndex: 'name0',
          align: 'center',
        },
        {
          title: '工程建设费用',
          dataIndex: 'name1',
          align: 'center',
        },
      ],
    },
    {
      title: '投资构成（万元）',
      children: [
        {
          title: '市政投资',
          dataIndex: 'name2',
          align: 'center',
        },
        {
          title: '开发区自筹',
          children: [
            {
              title: '财政局投资',
              dataIndex: 'name31',
              align: 'center',
            },
            {
              title: '平台公司投',
              dataIndex: 'name32',
              align: 'center',
            },
          ],
        },
        {
          title: '社会投资',
          dataIndex: 'name4',
          align: 'center',
        },
        {
          title: '其他投资',
          dataIndex: 'name5',
          align: 'center',
        },
      ],
    },
    {
      title: '实际发生（万元）',
      children: [
        {
          title: '财政预算',
          dataIndex: 'name6',
          align: 'center',
        },
        {
          title: '平台公司预算',
          dataIndex: 'name7',
          align: 'center',
        },
        {
          title: '社会投资',
          dataIndex: 'name8',
          align: 'center',
        },
      ],
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: () => (
        <Space>
          <Button type='text' size='mini'>
            修改
          </Button>
          <Button type='text' size='mini'>
            删除
          </Button>
        </Space>
      ),
    },
  ]
  const data = [
    {
      key: 1,
      name: '2022',
      name0: '200.00',
      name1: '150.00',
      name2: '200.00',
      name31: '200.00',
      name32: '200.00',
      name4: '200.00',
      name5: '200.00',
      name6: '200.00',
      name7: '200.00',
      name8: '200.00',
    },
    {
      key: 2,
      name: '2023',
      name0: '100.00',
      name1: '0',
      name2: '100.00',
      name31: '100.00',
      name32: '100.00',
      name4: '100.00',
      name5: '100.00',
      name6: '100.00',
      name7: '100.00',
      name8: '100.00',
    },
  ]
  const columnsIncome = [
    {
      title: '序号',
      dataIndex: 'index',
      render: (text, item, index) => index + 1,
    },
    {
      title: '款项类型',
      dataIndex: 'name1',
    },
    {
      title: '委托方',
      dataIndex: 'name2',
    },
    {
      title: '进账日期',
      dataIndex: 'name3',
    },
    {
      title: '备注',
      dataIndex: 'name4',
    },
    {
      title: '进账金额(万元)',
      dataIndex: 'name5',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: () => (
        <Button type='text' size='mini'>
          查看
        </Button>
      ),
    },
  ]
  const dataIncome = [
    {
      key: 1,
      name1: '预付款',
      name2: '供应商1',
      name3: '2023-3-1',
      name4: '已签订合同，未达到付款条件',
      name5: '42.47',
    },
    {
      key: 2,
      name1: '进度款',
      name2: '供应商2',
      name3: '2023-3-1',
      name4: '40%',
      name5: '133.97',
    },
    {
      key: 3,
      name1: '建筑工程',
      name2: '供应商3',
      name3: '2023-3-1',
      name4: '0%',
      name5: '100.00',
    },
    {
      key: 4,
      name1: '安装工程',
      name2: '供应商4',
      name3: '2023-3-1',
      name4: '20%',
      name5: '200.00',
    },
    {
      key: 5,
      name1: '监理',
      name2: '供应商5',
      name3: '2023-3-1',
      name4: '30%',
      name5: '130.01',
    },
  ]
  const columnsDisburse = [
    {
      title: '序号',
      dataIndex: 'index',
      render: (text, item, index) => index + 1,
    },
    {
      title: '付款市批单据号',
      dataIndex: 'name1',
    },
    {
      title: '付款日期',
      dataIndex: 'name2',
    },
    {
      title: '付款说明',
      dataIndex: 'name3',
    },
    {
      title: '本次付款金额(万元)',
      dataIndex: 'name4',
    },
  ]
  const dataDisburse = [
    {
      key: 1,
      name1: 'FK-20230501-001',
      name2: '2023-5-1',
      name3: '已付部分进度款59.84万',
      name4: '59.84',
    },
    {
      key: 2,
      name1: 'FK-20230602-002',
      name2: '2023-6-2',
      name3: '已达到付款条件(30万的80%)',
      name4: '24',
    },
  ]

  // 合计
  const summary = (currentData) => (
    <Table.Summary.Row>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>合计</Table.Summary.Cell>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>
        {currentData.reduce((prev, next) => prev + Number(next.name0), 0)}.00
      </Table.Summary.Cell>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>
        {currentData.reduce((prev, next) => prev + Number(next.name1), 0)}.00
      </Table.Summary.Cell>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>
        {currentData.reduce((prev, next) => prev + Number(next.name2), 0)}.00
      </Table.Summary.Cell>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>
        {currentData.reduce((prev, next) => prev + Number(next.name31), 0)}.00
      </Table.Summary.Cell>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>
        {currentData.reduce((prev, next) => prev + Number(next.name32), 0)}.00
      </Table.Summary.Cell>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>
        {currentData.reduce((prev, next) => prev + Number(next.name4), 0)}.00
      </Table.Summary.Cell>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>
        {currentData.reduce((prev, next) => prev + Number(next.name5), 0)}.00
      </Table.Summary.Cell>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>
        {currentData.reduce((prev, next) => prev + Number(next.name6), 0)}.00
      </Table.Summary.Cell>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>
        {currentData.reduce((prev, next) => prev + Number(next.name7), 0)}.00
      </Table.Summary.Cell>
      <Table.Summary.Cell style={{ textAlign: 'center' }}>
        {currentData.reduce((prev, next) => prev + Number(next.name0), 0)}.00
      </Table.Summary.Cell>
      <Table.Summary.Cell></Table.Summary.Cell>
    </Table.Summary.Row>
  )

  return (
    <>
      <div className='flex justify-between'>
        <div className='text-xl font-bold'>资金</div>
        <Button type='text' icon={<IconEdit />}>
          编辑
        </Button>
      </div>

      <div className='flex mt-5'>
        {gridCardList.map((item) => (
          <Card bordered={false} key={item.key} className={`w-1/${gridCardList.length}`}>
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

      {type ? (
        <Card
          bordered={false}
          className='mt-5'
          title='年度投资信息'
          extra={
            <Button type='primary' size='mini' icon={<IconPlus />}>
              新增投资
            </Button>
          }>
          <Table
            border={{
              wrapper: true,
              cell: true,
            }}
            columns={columns}
            data={data}
            summary={summary}
            pagination={{ showTotal: true, pageSize: 10, current: 1 }}
          />
        </Card>
      ) : (
        <>
          <Card bordered={false} className='mt-5' title='进账'>
            <Table columns={columnsIncome} data={dataIncome} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
          </Card>
          <Card bordered={false} className='mt-5' title='支出'>
            <Table columns={columnsDisburse} data={dataDisburse} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
          </Card>
        </>
      )}
    </>
  )
}
export default Fund
