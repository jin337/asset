import ReactDOM from 'react-dom/client'
// 路由
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
// redux
import { Provider } from 'react-redux'
import { store } from './store'
// 样式
import './index.css'
import '@arco-design/web-react/dist/css/arco.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
