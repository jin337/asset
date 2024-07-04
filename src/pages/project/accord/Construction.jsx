import { useState } from 'react'
import { Card, Checkbox, Image, Upload, Space, Button, Input } from '@arco-design/web-react'
import {
  IconImage,
  IconEdit,
  IconCheckCircle,
  IconLoop,
  IconCloud,
  IconScan,
  IconDelete,
  IconDownload,
} from '@arco-design/web-react/icon'

const Construction = () => {
  const [selectValue, setSelectValue] = useState([])
  const [indeterminate, setIndeterminate] = useState(false)
  const [checkAll, setCheckAll] = useState(false)

  const PDFList = [
    {
      key: 1,
      icon: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      name: '张三',
      time: '2022-01-02',
    },
    {
      key: 2,
      icon: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      name: '张三张三张三张三张三张三张三张三张三',
      time: '2022-01-02',
    },
    {
      key: 3,
      icon: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      name: '张三',
      time: '2022-01-02',
    },
    {
      key: 4,
      icon: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
      name: '张三',
      time: '2022-01-02',
    },
    {
      key: 5,
      icon: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      name: '张三张三张三张三张三张三张三张三张三',
      time: '2022-01-02',
    },
    {
      key: 6,
      icon: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      name: '张三',
      time: '2022-01-02',
    },
    {
      key: 7,
      icon: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      name: '张三',
      time: '2022-01-02',
    },
    {
      key: 8,
      icon: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      name: '张三',
      time: '2022-01-02',
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
      <Card bordered={false} title='道路工程施工/道路基层施工'>
        <div className='flex justify-between'>
          <Checkbox onChange={onChangeAll} checked={checkAll} indeterminate={indeterminate}>
            <span className='text-sm ml-1'>
              全选（{selectValue.length}/{PDFList.length}）
            </span>
          </Checkbox>
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
                  <Button type='secondary' size='small' shape='round' icon={<IconEdit />}>
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
        </div>
        <div className='flex flex-wrap checkall'>
          <Checkbox.Group value={selectValue} onChange={onChangeCheckbox}>
            <>
              <div className='text-base my-2 ml-2'>施工前</div>
              {PDFList.slice(0, 3).map((item) => (
                <Checkbox className='w-32' style={{ margin: '0 9px 9px 0', padding: '8px' }} key={item.key} value={item.key}>
                  <div className='text-center'>
                    <Image src={item.icon} alt={item.name} />
                    <div className='truncate text-xs leading-6 mt-2'>
                      {selectValue.length === 1 && selectValue[0] === item.key ? (
                        <Input defaultValue={item.name} size='mini' />
                      ) : (
                        item.name
                      )}
                    </div>
                    <div className='truncate text-xs text-neutral-400'>{item.time}</div>
                  </div>
                </Checkbox>
              ))}
              <label className='arco-checkbox w-1/5' style={{ marginRight: 0, position: 'absolute', marginTop: '1rem' }}>
                <Upload listType='picture-card' action='/'>
                  <div className='arco-upload-trigger-picture'>
                    <div className='arco-upload-trigger-picture-text'>
                      <IconImage className='text-xl' />
                    </div>
                  </div>
                </Upload>
              </label>
            </>

            <>
              <div className='text-base my-2 ml-2'>施工中</div>
              {PDFList.slice(3, 5).map((item) => (
                <Checkbox className='w-32' style={{ margin: '0 9px 9px 0', padding: '8px' }} key={item.key} value={item.key}>
                  <div className='text-center'>
                    <Image src={item.icon} alt={item.name} />
                    <div className='truncate text-xs leading-6 mt-2'>
                      {selectValue.length === 1 && selectValue[0] === item.key ? (
                        <Input defaultValue={item.name} size='mini' />
                      ) : (
                        item.name
                      )}
                    </div>
                    <div className='truncate text-xs text-neutral-400'>{item.time}</div>
                  </div>
                </Checkbox>
              ))}
              <label className='arco-checkbox w-1/5' style={{ marginRight: 0, position: 'absolute', marginTop: '1rem' }}>
                <Upload listType='picture-card' action='/'>
                  <div className='arco-upload-trigger-picture'>
                    <div className='arco-upload-trigger-picture-text'>
                      <IconImage className='text-xl' />
                    </div>
                  </div>
                </Upload>
              </label>
            </>

            <>
              <div className='text-base my-2 ml-2'>施工后</div>
              {PDFList.slice(5, 8).map((item) => (
                <Checkbox className='w-32' style={{ margin: '0 9px 9px 0', padding: '8px' }} key={item.key} value={item.key}>
                  <div className='text-center'>
                    <Image src={item.icon} alt={item.name} />
                    <div className='truncate text-xs leading-6 mt-2'>
                      {selectValue.length === 1 && selectValue[0] === item.key ? (
                        <Input defaultValue={item.name} size='mini' />
                      ) : (
                        item.name
                      )}
                    </div>
                    <div className='truncate text-xs text-neutral-400'>{item.time}</div>
                  </div>
                </Checkbox>
              ))}
              <label className='arco-checkbox w-1/5' style={{ marginRight: 0, position: 'absolute', marginTop: '1rem' }}>
                <Upload listType='picture-card' action='/'>
                  <div className='arco-upload-trigger-picture'>
                    <div className='arco-upload-trigger-picture-text'>
                      <IconImage className='text-xl' />
                    </div>
                  </div>
                </Upload>
              </label>
            </>
          </Checkbox.Group>
        </div>
      </Card>
    </>
  )
}
export default Construction
