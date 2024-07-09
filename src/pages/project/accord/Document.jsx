import { useState } from 'react'
import { Card, Input, Button, Form, Space, Checkbox, Upload } from '@arco-design/web-react'
import { IconFile, IconEdit, IconFilePdf, IconShareExternal, IconDelete, IconDownload } from '@arco-design/web-react/icon'

const FormItem = Form.Item
const Document = () => {
  const [form] = Form.useForm()
  const [disabledForm, setDisabledForm] = useState(true)

  const [selectValue, setSelectValue] = useState([])
  const [indeterminate, setIndeterminate] = useState(false)
  const [checkAll, setCheckAll] = useState(false)
  const [rename, setRename] = useState(false)

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
            <span className='ml-1 text-base text-blue-500'>批复文件</span>
          </div>
          <div className='ml-6'>
            <div className='mb-2 mt-1 text-sm'>请上传批复文件的盖章电子件</div>
            <div className='flex justify-between'>
              <Checkbox onChange={onChangeAll} checked={checkAll} indeterminate={indeterminate}>
                <span className='ml-1 text-sm'>
                  全选（{selectValue.length}/{PDFList.length}）
                </span>
              </Checkbox>
              <Space size='large'>
                {selectValue.length > 0 && (
                  <Button type='secondary' size='small' shape='round' icon={<IconDelete />}>
                    删除
                  </Button>
                )}
                {selectValue.length === 1 ? (
                  <Button type='secondary' size='small' shape='round' icon={<IconEdit />} onClick={() => setRename(!rename)}>
                    重命名
                  </Button>
                ) : null}
                {PDFList.length > 0 && (
                  <Button type='secondary' size='small' shape='round' icon={<IconDownload />}>
                    下载
                  </Button>
                )}
              </Space>
            </div>
            <div className='checkall mt-4'>
              <Checkbox.Group value={selectValue} onChange={onChangeCheckbox}>
                {PDFList.map((item) => (
                  <Checkbox className='w-32' style={{ margin: '0 9px 9px 0', padding: '8px' }} key={item.key} value={item.key}>
                    <div className='text-center'>
                      <div className='text-6xl'>{item.icon}</div>
                      <div className='truncate text-xs leading-6'>
                        {selectValue.length === 1 && selectValue[0] === item.key && rename ? (
                          <Input defaultValue={item.name} size='mini' />
                        ) : (
                          item.name
                        )}
                      </div>
                      <div className='truncate text-xs text-neutral-400'>{item.size}</div>
                    </div>
                  </Checkbox>
                ))}
                <label className='arco-checkbox w-1/5' style={{ marginRight: 0, position: 'absolute', marginTop: '1rem' }}>
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
          <div className='mt-5 flex items-center justify-between'>
            <div className='flex items-center'>
              <IconEdit className='text-xl' />
              <span className='ml-1 text-base text-blue-500'>批复信息</span>
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
