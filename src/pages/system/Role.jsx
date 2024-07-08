import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, Modal, Table, Space, Form, Input, Tree } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'

const FormItem = Form.Item
const TextArea = Input.TextArea

const Role = () => {
  const system = useSelector((state) => state.system)
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)

  const columns = [
    {
      title: '角色名称',
      dataIndex: 'name1',
    },
    {
      title: '创建时间',
      dataIndex: 'name2',
    },
    {
      title: '备注',
      dataIndex: 'name3',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      render: () => (
        <Space>
          <Button type='text' size='mini'>
            编辑
          </Button>
          <Button type='text' size='mini'>
            删除
          </Button>
        </Space>
      ),
    },
  ]
  const data = []

  return (
    <>
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>角色管理</div>
        <Button icon={<IconPlus />} type='primary' onClick={() => setVisible(true)}>
          新建角色
        </Button>
      </div>
      <Card bordered={false} className='mt-5'>
        <Table columns={columns} data={data} pagination={{ showTotal: true, pageSize: 10, current: 1 }} />
      </Card>

      <Modal
        style={{ width: '800px' }}
        title='添加角色'
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
        okText='提交'
        cancelText='取消'>
        <Form
          form={form}
          autoComplete='off'
          labelCol={{ style: { flexBasis: 120 } }}
          wrapperCol={{ style: { flexBasis: 'calc(100% - 120px)' } }}>
          <FormItem label='角色名称' field='key1' required>
            <Input placeholder='输入' allowClear />
          </FormItem>
          <FormItem label='菜单权限' field='key2' required>
            <Tree
              className='overflow-y-auto h-52'
              checkable
              treeData={system.mainMenu}
              fieldNames={{
                key: 'itemKey',
                title: 'text',
              }}></Tree>
          </FormItem>
          <FormItem label='描述' field='key3' required>
            <TextArea placeholder='请输入内容' allowClear />
          </FormItem>
        </Form>
      </Modal>
    </>
  )
}
export default Role
