import { useState } from 'react'
import { Card, Checkbox, Image } from '@arco-design/web-react'
import {} from '@arco-design/web-react/icon'

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
        <Checkbox onChange={onChangeAll} checked={checkAll} indeterminate={indeterminate}>
          <span className='text-sm ml-1'>
            全选（{selectValue.length}/{PDFList.length}）
          </span>
        </Checkbox>
        <div className='text-base my-2'>施工前</div>
        <div className='flex flex-wrap'>
          <Checkbox.Group value={selectValue} onChange={onChangeCheckbox}>
            {PDFList.map((item) => (
              <Checkbox className='w-1/5' style={{ marginRight: 0, paddingLeft: 0 }} key={item.key} value={item.key}>
                {({ checked }) => (
                  <div className={`text-center m-1 p-3 rounded ${checked ? 'bg-blue-200' : ''}`}>
                    <Image src={item.icon} alt={item.name} />
                    <div className='truncate text-xs my-1'>{item.name}</div>
                    <div className='truncate text-xs text-neutral-400'>{item.time}</div>
                  </div>
                )}
              </Checkbox>
            ))}
            {/* <div className='arco-checkbox w-1/5' style={{ marginRight: 0 }} key='Upload'>
              <Upload listType='picture-card' action='/'>
                <div className='arco-upload-trigger-picture'>
                  <div className='arco-upload-trigger-picture-text'>
                    <IconImage className='text-xl' />
                  </div>
                </div>
              </Upload>
            </div> */}
          </Checkbox.Group>
        </div>
      </Card>
    </>
  )
}
export default Construction
