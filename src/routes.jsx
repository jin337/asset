import { createBrowserRouter } from 'react-router-dom'

import Home from './views/Home'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Standard from './pages/Standard'
import User from './pages/User'
import Analyse from './pages/Analyse'
import System from './pages/System'

import ProjectDashboard from './pages/project/ProjectDashboard'
import Overview from './pages/project/Overview'
import Fund from './pages/project/Fund'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
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
        ],
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
      },
    ],
  },
])
