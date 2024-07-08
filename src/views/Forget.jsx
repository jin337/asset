import {} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Form, Input, Button, Image } from '@arco-design/web-react'
import { IconEmail, IconLeft } from '@arco-design/web-react/icon'

const FormItem = Form.Item
const Forget = () => {
  const common = useSelector((state) => state.common)
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-center h-dvh'>
      <div className='w-1/4'>
        <Form size='large' layout='vertical' initialValues={{ email: '123@16.com' }}>
          <FormItem>
            <div className='flex flex-col items-center'>
              <Image preview={false} width={100} src={common.logo} />
              <p className='text-3xl mt-2'>重置密码</p>
            </div>
          </FormItem>
          <FormItem className='text-neutral-400'>请通过输入用户名/手机号码/绑定邮箱重置你的帐号密码</FormItem>
          <FormItem></FormItem>
          <FormItem field='email'>
            <Input prefix={<IconEmail />} placeholder='用户名/邮箱地址/手机号' />
          </FormItem>
          <FormItem>
            <Button type='primary' long>
              重置密码
            </Button>
          </FormItem>
          <FormItem>
            <Button type='secondary' long icon={<IconLeft />} onClick={() => navigate('/login')}>
              返回登录页
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}
export default Forget
