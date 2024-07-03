import { useState } from 'react'
import { Card, Input, Tree, Button, Form, Space, Checkbox, Typography, Upload, Dropdown, Menu } from '@arco-design/web-react'
import {
  IconCheckCircleFill,
  IconSearch,
  IconFilter,
  IconExport,
  IconFile,
  IconEdit,
  IconFilePdf,
  IconShareExternal,
} from '@arco-design/web-react/icon'

const FormItem = Form.Item
const Accord = () => {
  const [form] = Form.useForm()
  const [disabledForm, setDisabledForm] = useState(true)

  const [selectValue, setSelectValue] = useState([])
  const [indeterminate, setIndeterminate] = useState(false)
  const [checkAll, setCheckAll] = useState(false)

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

  const PDFList = [
    {
      key: 1,
      icon: <IconFilePdf className='text-7xl' />,
      name: 'FK-20230501-001111111111111',
      size: '51.02KBkkkkkkkkkkkkkkkkkkkkkkkkk',
    },
    {
      key: 2,
      icon: <IconFilePdf className='text-7xl' />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 3,
      icon: <IconFilePdf className='text-7xl' />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 4,
      icon: <IconFilePdf className='text-7xl' />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 5,
      icon: <IconFilePdf className='text-7xl' />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 6,
      icon: <IconFilePdf className='text-7xl' />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 7,
      icon: <IconFilePdf className='text-7xl' />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
    {
      key: 8,
      icon: <IconFilePdf className='text-7xl' />,
      name: 'FK-20230501-001',
      size: '51.02KB',
    },
  ]

  const dropList = (
    <Menu>
      <Menu.Item key={'0'}>全部</Menu.Item>
      <Menu.Item key={'1'}>已填报</Menu.Item>
      <Menu.Item key={'2'}>未填报</Menu.Item>
    </Menu>
  )
  const onSelectTree = (e) => {
    console.log('当前点击：', e)
  }

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
      <div className='flex justify-between'>
        <div className='text-xl font-bold'>
          依据<span className='ml-8 text-sm font-normal text-blue-500'>市政基础设施/市政道路</span>
        </div>
        <Button type='text' size='small' icon={<IconExport />}>
          导出
        </Button>
      </div>
      <div className='mt-5 flex content-between'>
        <Card className='w-1/4' bordered={false}>
          <div className='flex items-center'>
            <Input suffix={<IconSearch />} placeholder='请输入关键字' allowClear />
            <Dropdown droplist={dropList} position='br'>
              <IconFilter className='ml-3 text-xl' />
            </Dropdown>
          </div>
          <Tree
            className='mt-2'
            blockNode
            onSelect={onSelectTree}
            selectedKeys={['1-1']}
            treeData={treeData}
            renderExtra={() => (
              <IconCheckCircleFill style={{ position: 'absolute', right: 8, top: 10, color: '#3b82f6' }} />
            )}></Tree>
        </Card>

        <Card className='w-3/4 ml-10' bordered={false} title='项目启动文件'>
          {/* 批复文件 */}
          <>
            <div className='flex items-center'>
              <IconFile className='text-xl' />
              <span className='text-base text-blue-500 ml-1'>批复文件</span>
            </div>
            <div className='ml-6'>
              <div className='mt-1 mb-2'>请上传批复文件的盖章电子件</div>
              <Checkbox onChange={onChangeAll} checked={checkAll} indeterminate={indeterminate}>
                全选（{selectValue.length}/{PDFList.length}）
              </Checkbox>
              <div className='flex flex-wrap mt-5'>
                <Checkbox.Group value={selectValue} onChange={onChangeCheckbox}>
                  {PDFList.map((item) => (
                    <Checkbox className='mb-5 w-1/6' key={item.key} value={item.key}>
                      {({ checked }) => (
                        <div className={`flex flex-col items-center p-1 rounded ${checked ? 'bg-blue-200' : ''}`}>
                          {item.icon}
                          <Typography.Ellipsis className='w-full text-xs my-1'>{item.name}</Typography.Ellipsis>
                          <Typography.Ellipsis className='w-full text-xs text-neutral-400'>{item.size}</Typography.Ellipsis>
                        </div>
                      )}
                    </Checkbox>
                  ))}
                  <div className='arco-checkbox mb-5 w-1/6'>
                    <div className='w-full h-full absolute top-[-40px]'>
                      <Upload listType='picture-card' action='/'>
                        <div className='arco-upload-trigger-picture'>
                          <div className='arco-upload-trigger-picture-text'>
                            <IconShareExternal />
                          </div>
                        </div>
                      </Upload>
                    </div>
                  </div>
                </Checkbox.Group>
              </div>
            </div>
          </>

          {/* 批复信息 */}
          <>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <IconEdit className='text-xl' />
                <span className='text-base text-blue-500 ml-1'>批复信息</span>
              </div>
              {disabledForm ? (
                <Button type='text' size='small' onClick={() => setDisabledForm(false)}>
                  填报
                </Button>
              ) : (
                <Space size='large'>
                  <Button type='secondary' size='small' onClick={() => setDisabledForm(true)}>
                    取消
                  </Button>
                  <Button type='primary' size='small' onClick={() => setDisabledForm(true)}>
                    报错
                  </Button>
                </Space>
              )}
            </div>
            <Form form={form} autoComplete='off' layout='vertical' disabled={disabledForm} className='mt-3'>
              <FormItem label='项目代码' field='key1'>
                <Input placeholder='输入' allowClear />
              </FormItem>
              <div className='flex gap-10'>
                <FormItem label='批复文号' field='key2'>
                  <Input placeholder='输入' allowClear />
                </FormItem>
                <FormItem label='批复单位' field='key3'>
                  <Input placeholder='输入' allowClear />
                </FormItem>
              </div>
              <FormItem label='批复日期' field='key4'>
                <Input placeholder='输入' allowClear />
              </FormItem>
            </Form>
          </>
        </Card>
      </div>
    </>
  )
}
export default Accord
