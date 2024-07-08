import {} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Carousel, Form, Input, Button, Checkbox, Link, Image } from '@arco-design/web-react'
import { IconUser, IconLock } from '@arco-design/web-react/icon'

const FormItem = Form.Item
const Login = () => {
  const common = useSelector((state) => state.common)
  const navigate = useNavigate()

  return (
    <div className='flex justify-between h-dvh'>
      <div className='w-2/5'>
        <Carousel autoPlay={true} className='h-full'>
          <div className='bg-purple-400'></div>
          <div className='bg-blue-400'></div>
          <div className='bg-lime-400'></div>
          <div className='bg-red-400'></div>
        </Carousel>
      </div>
      <div className='w-3/5 flex justify-center items-center'>
        <div className='w-2/5'>
          <Form size='large' layout='vertical' initialValues={{ username: 'admin', password: 'admin' }}>
            <FormItem>
              <div className='flex flex-col items-center'>
                <Image preview={false} width={100} src={common.logo} />
                <p className='text-3xl mt-2'>登录</p>
              </div>
            </FormItem>
            <FormItem field='username'>
              <Input prefix={<IconUser />} placeholder='Username:admin' />
            </FormItem>
            <FormItem field='password'>
              <Input.Password prefix={<IconLock />} placeholder='Password:admin' />
            </FormItem>
            <FormItem field='readme'>
              <div className='flex justify-between'>
                <Checkbox>记住密码</Checkbox>
                <Link href='/forget'>忘记密码</Link>
              </div>
            </FormItem>
            <FormItem>
              <Button type='primary' long onClick={() => navigate('/dashboard')}>
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default Login
