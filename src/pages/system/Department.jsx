import { useState } from 'react'
import { Button, Card, Modal } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'

const Department = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>部门管理</div>
        <Button icon={<IconPlus />} type='primary' onClick={() => setVisible(true)}>
          新建部门
        </Button>
      </div>
      <Card bordered={false} className='mt-5'>
        部门
      </Card>

      <Modal visible={visible}></Modal>
    </>
  )
}
export default Department
