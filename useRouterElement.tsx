import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './src/layout/MainLayout'
import { Home } from 'src/component/Home'
import Project from 'src/component/Project/Project'
import Services from 'src/component/Service/Services'
import About from 'src/component/About/About'
import Contact from 'src/component/Contact/Contact'
import Interior from 'src/component/Project/Interior'
import Furniture from 'src/component/Project/Furniture'
import Exterior from 'src/component/Project/Exterior'
import Page2D from 'src/component/Project/2D'
const useRouterElements = () => {
  const elements = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: 'project',
      element: (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ),
      children: [
        {
          path: '',
          index: true,
          element: <Project />
        },
        {
          path: 'interior-rendering',
          element: <Interior />
        },
        {
          path: 'furniture-modeling',
          element: <Furniture />
        },
        {
          path: 'exterior-rendering',
          element: <Exterior />
        },
        {
          path: '2d',
          element: <Page2D />
        }
      ]
    },
    {
      path: 'services',
      element: (
        <MainLayout>
          <Services />
        </MainLayout>
      )
    },
    {
      path: 'about-us',
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      )
    },
    {
      path: 'contact-us',
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      )
    }
  ])
  return elements
}

export default useRouterElements
