import { createBrowserRouter } from 'react-router-dom'

import Login from './views/Login'
import Home from './views/Home'

import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Standard from './pages/Standard'
import User from './pages/User'
import Analyse from './pages/Analyse'
import System from './pages/System'
// 项目
import ProjectDashboard from './pages/project/Dashboard'
import Overview from './pages/project/Overview'
import Fund from './pages/project/Fund'
import Subentry from './pages/project/Subentry'
import Contract from './pages/project/Contract'
import Accord from './pages/project/Accord'
import Member from './pages/project/Member'
import Setting from './pages/project/Setting'
// 项目/依据
import Construction from './pages/project/accord/Construction'
import Document from './pages/project/accord/Document'
// 标准
import CreateList from './pages/standard/CreateList'
// 用户
import Menu from './pages/system/Menu'
import Department from './pages/system/Department'
import Role from './pages/system/Role'
import Dictionaries from './pages/system/Dictionaries'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/project',
        element: <Project />,
      },
      {
        path: '/standard',
        element: <Standard />,
      },
      {
        path: '/standard/create-list',
        element: <CreateList />,
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/analyse',
        element: <Analyse />,
      },
      {
        path: '/system',
        element: <System />,
        children: [
          {
            path: '/system/menu',
            element: <Menu />,
          },
          {
            path: '/system/department',
            element: <Department />,
          },
          {
            path: '/system/role',
            element: <Role />,
          },
          {
            path: '/system/dictionaries',
            element: <Dictionaries />,
          },
        ],
      },
      {
        path: '/project-dashboard',
        element: <ProjectDashboard />,
        children: [
          {
            path: '/project-dashboard/overview',
            element: <Overview />,
          },
          {
            path: '/project-dashboard/Fund',
            element: <Fund />,
          },
          {
            path: '/project-dashboard/subentry',
            element: <Subentry />,
          },
          {
            path: '/project-dashboard/contract',
            element: <Contract />,
          },
          {
            path: '/project-dashboard/accord',
            element: <Accord />,
            children: [
              {
                path: '/project-dashboard/accord/document',
                element: <Document />,
              },
              {
                path: '/project-dashboard/accord/construction',
                element: <Construction />,
              },
            ],
          },
          {
            path: '/project-dashboard/member',
            element: <Member />,
          },
          {
            path: '/project-dashboard/setting',
            element: <Setting />,
          },
        ],
      },
    ],
  },
])
