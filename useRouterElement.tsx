import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './src/layout/MainLayout'
import { Home } from 'src/component/Home'
import Project from 'src/component/Project/Project'
import Services from 'src/component/Service/Services'
import About from 'src/component/About/About'
import Contact from 'src/component/Contact/Contact'
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
          <Project />
        </MainLayout>
      )
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
