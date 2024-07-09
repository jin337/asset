import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, Table, Form, Select, Modal, Tree, Switch } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'
import { useEffect } from 'react'

const FormItem = Form.Item

const Member = () => {
  const common = useSelector((state) => state.common)
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const [treeData, setTreeData] = useState([])

  const columns = [
    {
      title: '成员编号',
      dataIndex: 'index',
      render: (text, item, index) => index + 1,
    },
    {
      title: '用户账号',
      dataIndex: 'name',
    },
    {
      title: '用户名',
      dataIndex: 'name1',
    },
    {
      title: '角色',
      dataIndex: 'name2',
    },
    {
      title: '状态',
      dataIndex: 'name3',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: () => <Button type='text'>删除</Button>,
    },
  ]
  const data = [
    {
      key: '1',
      name: 'admin',
      name1: '张三',
      name2: '管理员',
      name3: '正常',
    },
    {
      key: '2',
      name: 'BZ1002',
      name1: '管理员 ',
      name2: '资管员',
      name3: '正常',
    },
  ]
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

  useEffect(() => {
    const item = common.mainMenu?.find((e) => e.itemKey === 'project')
    item && setTreeData(item.children)
  }, [common.mainMenu])

  return (
    <>
      <div className='flex justify-between'>
        <div className='text-xl font-bold'>成员</div>
        <Button type='primary' size='small' icon={<IconPlus />} onClick={() => setVisible(true)}>
          新增成员
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
          <FormItem label='选择用户' field='key1' required>
            <Select options={options} allowClear />
          </FormItem>
          <FormItem label='菜单权限' field='key2' required>
            <Tree
              className='h-52 overflow-y-auto'
              checkable
              treeData={treeData}
              fieldNames={{
                key: 'itemKey',
                title: 'text',
              }}></Tree>
          </FormItem>
          <FormItem label='状态' field='key3' required>
            <Switch checkedText='开' uncheckedText='关' />
          </FormItem>
        </Form>
      </Modal>
    </>
  )
}
export default Member
