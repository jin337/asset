import { useState } from 'react'
import { Card, Input, Button, Form, Space, Checkbox, Upload } from '@arco-design/web-react'
import { IconFile, IconEdit, IconFilePdf, IconShareExternal } from '@arco-design/web-react/icon'

const FormItem = Form.Item
const Document = () => {
  const [form] = Form.useForm()
  const [disabledForm, setDisabledForm] = useState(true)

  const [selectValue, setSelectValue] = useState([])
  const [indeterminate, setIndeterminate] = useState(false)
  const [checkAll, setCheckAll] = useState(false)

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
      <Card bordered={false} title='项目启动文件'>
        {/* 批复文件 */}
        <>
          <div className='flex items-center'>
            <IconFile className='text-xl' />
            <span className='text-base text-blue-500 ml-1'>批复文件</span>
          </div>
          <div className='ml-6'>
            <div className='mt-1 mb-2 text-sm'>请上传批复文件的盖章电子件</div>
            <Checkbox onChange={onChangeAll} checked={checkAll} indeterminate={indeterminate}>
              <span className='text-sm ml-1'>
                全选（{selectValue.length}/{PDFList.length}）
              </span>
            </Checkbox>
            <div className='mt-4'>
              <Checkbox.Group value={selectValue} onChange={onChangeCheckbox}>
                {PDFList.map((item) => (
                  <Checkbox className='w-1/5' style={{ marginRight: 0, paddingLeft: 0 }} key={item.key} value={item.key}>
                    {({ checked }) => (
                      <div className={`text-center m-2 p-4 border ${checked ? 'bg-blue-200 border-blue-500' : 'border-white'}`}>
                        <div className='text-6xl'>{item.icon}</div>
                        <div className='truncate text-xs my-1'>{item.name}</div>
                        <div className='truncate text-xs text-neutral-400'>{item.size}</div>
                      </div>
                    )}
                  </Checkbox>
                ))}
                <label className='arco-checkbox w-1/5' style={{ marginRight: 0, position: 'absolute', marginTop: '2rem' }}>
                  <Upload listType='picture-card' action='/'>
                    <div className='arco-upload-trigger-picture'>
                      <div className='arco-upload-trigger-picture-text'>
                        <IconShareExternal className='text-xl' />
                      </div>
                    </div>
                  </Upload>
                </label>
              </Checkbox.Group>
            </div>
          </div>
        </>

        {/* 批复信息 */}
        <>
          <div className='flex items-center justify-between mt-5'>
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
    </>
  )
}
export default Document
