import { useState } from 'react'
import {
  Button,
  Card,
  Table,
  Form,
  Input,
  Select,
  Drawer,
  Descriptions,
  Avatar,
  Space,
  Checkbox,
  Divider,
} from '@arco-design/web-react'
import {
  IconPlus,
  IconSearch,
  IconSettings,
  IconCheckCircle,
  IconLoop,
  IconCloud,
  IconScan,
  IconList,
  IconApps,
  IconFilePdf,
  IconDelete,
  IconEdit,
  IconDownload,
} from '@arco-design/web-react/icon'

const FormItem = Form.Item
const ButtonGroup = Button.Group
const Contract = () => {
  const [visible1, setVisible1] = useState()
  const [visible2, setVisible2] = useState()

  const [isList, setIsList] = useState(false)
  const [selectValue, setSelectValue] = useState([])
  const [indeterminate, setIndeterminate] = useState(false)
  const [checkAll, setCheckAll] = useState(false)
  const [rename, setRename] = useState(false)

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
      title: '合同编号',
      dataIndex: 'name',
      render: (text) => {
        return (
          <div
            className='cursor-pointer text-sm text-blue-500'
            onClick={() => window.open('https://www.aconvert.com/samples/sample.pdf', '_blank')}>
            {text}
          </div>
        )
      },
    },
    {
      title: '分项',
      dataIndex: 'name1',
    },
    {
      title: '合同名称',
      dataIndex: 'name2',
    },
    {
      title: '供应商',
      dataIndex: 'name3',
    },
    {
      title: '签订日期',
      dataIndex: 'name4',
    },
    {
      title: '进度',
      dataIndex: 'name5',
    },
    {
      title: '合同金额（万元）',
      dataIndex: 'name6',
    },
    {
      title: '已付款金额（万元）',
      dataIndex: 'name7',
      render: (text) => {
        return (
          <div className='cursor-pointer text-sm text-blue-500' onClick={() => setVisible1(true)}>
            {text}
          </div>
        )
      },
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: () => (
        <Button type='text' onClick={() => setVisible2(true)}>
          查看
        </Button>
      ),
    },
  ]
  const data = [
    {
      key: '1',
      name: 'HT-2020020-1019',
      name1: '勘察',
      name2: '合同1',
      name3: '供应商1',
      name4: '2023-3-1',
      name5: '已签订合同，未达到付款条件',
      name6: '42.47',
      name7: '未支付',
    },
    {
      key: '2',
      name: '2',
      name1: '设计',
      name2: '合同2',
      name3: '供应商1',
      name4: '2023-3-1',
      name5: '公开',
      name6: '133.97',
      name7: '133.97',
    },
    {
      key: '3',
      name: '3',
      name1: '建筑工程',
      name2: '合同3',
      name3: '供应商1',
      name4: '2023-3-1',
      name5: '公开',
      name6: '100.00',
      name7: '100.00',
    },
    {
      key: '4',
      name: '4',
      name1: '安装工程',
      name2: '合同4',
      name3: '供应商1',
      name4: '2023-3-1',
      name5: '邀请',
      name6: '200.00',
      name7: '200.00',
    },
    {
      key: '5',
      name: '5',
      name1: '监理',
      name2: '合同5',
      name3: '供应商1',
      name4: '2023-3-1',
      name5: '公开',
      name6: '130.01',
      name7: '130.01',
    },
  ]
  const columnsDrawer = [
    {
      title: '付款审批单据号',
      dataIndex: 'name',
      render: (text) => {
        return (
          <div
            className='cursor-pointer text-sm text-blue-500'
            onClick={() => window.open('https://www.aconvert.com/samples/sample.pdf', '_blank')}>
            {text}
          </div>
        )
      },
    },
    {
      title: '付款日期',
      dataIndex: 'name1',
    },
    {
      title: '付款说明',
      dataIndex: 'name2',
    },
    {
      title: '本次付款金额(万元)',
      dataIndex: 'name3',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: () => {
        return <Button type='text'>查看</Button>
      },
    },
  ]
  const dataDrawer = [
    {
      key: '1',
      name: 'FK-20230501-001',
      name1: '2023-5-1',
      name2: '已付部分进度款59.84万',
      name3: '59.84',
    },
    {
      key: '2',
      name: 'FK-20230602-002',
      name1: '2023-6-2',
      name2: '已达到付款条件(30万的80%)',
      name3: '24',
    },
  ]

  const DescriptionsData = [
    {
      label: '合同编号',
      value: 'HT-2020020-1019',
    },
    {
      label: '分项',
      value: '建设工程',
    },
    {
      label: '合同名称',
      value: '合同1',
    },
    {
      label: '供应商',
      value: '供应商3',
    },
  ]

  const gridCardList = [
    {
      key: 1,
      icon: (
        <Avatar>
          <IconSettings className='text-2xl' />
        </Avatar>
      ),
      title: '合同金额',
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
      title: '已支付',
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
      title: '剩余',
      price: 100,
      unit: '万元',
    },
  ]

  const PDFList = [
    {
      key: 1,
      icon: <IconFilePdf />,
      name: 'FK-20230501-001111111111111',
      size: '51.02KBkkkkkkkkkkkkkkkkkkkkkkkkk',
    },
    {
      key: 2,
      icon: <IconFilePdf />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 3,
      icon: <IconFilePdf />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 4,
      icon: <IconFilePdf />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 5,
      icon: <IconFilePdf />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 6,
      icon: <IconFilePdf />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 7,
      icon: <IconFilePdf />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 8,
      icon: <IconFilePdf />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
  ]

  // 全选
  function onChangeAll(checked) {
    if (checked) {
      setIndeterminate(false)
      setCheckAll(true)
      setSelectValue([1, 2, 3, 4, 5, 6, 7, 8])
    } else {
      setIndeterminate(false)
      setCheckAll(false)
      setSelectValue([])
    }
  }
  // 多选
  const onChangeCheckbox = (e) => {
    setSelectValue(e)
    setIndeterminate(!!(e.length && e.length !== PDFList.length))
    setCheckAll(!!(e.length === PDFList.length))
  }
  return (
    <>
      <div className='text-xl font-bold'>
        合同<span className='ml-8 text-sm font-normal text-blue-500'>合同累计额 300万元，已累计支付 230万元</span>
      </div>

      <Card bordered={false} className='mt-5'>
        <div className='flex justify-between'>
          <Form layout='inline'>
            <FormItem label='分项' field='key2'>
              <Select style={{ width: 150 }} options={options} allowClear />
            </FormItem>
            <FormItem label='供应商' field='key2'>
              <Select style={{ width: 150 }} options={options} allowClear />
            </FormItem>
            <FormItem field='key4'>
              <Input suffix={<IconSearch />} placeholder='请输入关键字' allowClear />
            </FormItem>
          </Form>
          <Button type='primary' size='small' icon={<IconPlus />}>
            新增合同
          </Button>
        </div>
        <Table className='mt-5' columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Card>
      {/* 付款详情 */}
      <Drawer
        footer={null}
        style={{ width: '800px' }}
        title='付款详情'
        visible={visible1}
        onOk={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}>
        <Descriptions colon=' :' layout='inline-horizontal' size='large' column={2} data={DescriptionsData} />

        <div className='mt-5 flex'>
          {gridCardList.map((item) => (
            <Card bordered={false} key={item.key} className='w-1/3'>
              <div className='flex items-center'>
                {item.icon}
                <div className='ml-3'>
                  <div className='mb-1'>{item.title}</div>
                  <div>
                    <span className='text-xl font-bold'>{item.price}</span>
                    <span className='ml-2'>{item.unit}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Table
          className='mt-5'
          columns={columnsDrawer}
          data={dataDrawer}
          pagination={{ showTotal: true, pageSize: 10, current: 1 }}
        />
      </Drawer>

      {/* 依据文件 */}
      <Drawer
        footer={null}
        style={{ width: '800px' }}
        title='依据文件'
        visible={visible2}
        onOk={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}>
        <div className='flex justify-between'>
          <Space size='large'>
            {!selectValue.length && (
              <>
                <Button type='primary' size='small' shape='round' icon={<IconScan />}>
                  扫描
                </Button>
                <Button type='primary' size='small' shape='round' icon={<IconCloud />}>
                  上传
                </Button>
              </>
            )}
            <Button type='primary' size='small' shape='round' icon={<IconCheckCircle />}>
              OA审批单
            </Button>
            {selectValue.length > 0 ? (
              <>
                <Button type='secondary' size='small' shape='round' icon={<IconDelete />}>
                  删除
                </Button>
                {selectValue.length === 1 ? (
                  <Button type='secondary' size='small' shape='round' icon={<IconEdit />} onClick={() => setRename(!rename)}>
                    重命名
                  </Button>
                ) : null}
                <Button type='secondary' size='small' shape='round' icon={<IconDownload />}>
                  下载
                </Button>
              </>
            ) : (
              <Button type='secondary' size='small' shape='round' icon={<IconLoop />}>
                刷新
              </Button>
            )}
          </Space>
          <ButtonGroup>
            <Button type={isList ? 'secondary' : 'primary'} icon={<IconApps />} onClick={() => setIsList(false)} />
            <Button type={isList ? 'primary' : 'secondary'} icon={<IconList />} onClick={() => setIsList(true)} />
          </ButtonGroup>
        </div>

        <Divider />
        <div>
          <Checkbox onChange={onChangeAll} checked={checkAll} indeterminate={indeterminate}>
            <span className='ml-2'>
              全选（{selectValue.length}/{PDFList.length}）
            </span>
          </Checkbox>
          <div className='checkall mt-3 flex flex-wrap'>
            <Checkbox.Group value={selectValue} onChange={onChangeCheckbox}>
              {PDFList.map((item) =>
                isList ? (
                  <Checkbox key={item.key} value={item.key} className='mb-1 w-full'>
                    <div className='mb-1 flex items-center p-1'>
                      <div className='text-5xl'>{item.icon}</div>
                      <div className='ml-2 w-11/12'>
                        <div className='truncate text-xs leading-6'>
                          {selectValue.length === 1 && selectValue[0] === item.key && rename ? (
                            <Input defaultValue={item.name} size='mini' />
                          ) : (
                            item.name
                          )}
                        </div>
                        <div className='mt-1 truncate text-xs text-neutral-400'>{item.size}</div>
                      </div>
                    </div>
                  </Checkbox>
                ) : (
                  <Checkbox className='w-32' style={{ margin: '12px 12px 0', padding: '8px' }} key={item.key} value={item.key}>
                    <div className='text-center'>
                      <div className='text-7xl'>{item.icon}</div>
                      <div className='my-1 truncate text-xs leading-6'>
                        {selectValue.length === 1 && selectValue[0] === item.key && rename ? (
                          <Input defaultValue={item.name} size='mini' />
                        ) : (
                          item.name
                        )}
                      </div>
                      <div className='truncate text-xs text-neutral-400'>{item.size}</div>
                    </div>
                  </Checkbox>
                )
              )}
            </Checkbox.Group>
          </div>
        </div>
      </Drawer>
    </>
  )
}
export default Contract
