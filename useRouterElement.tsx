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
import PageTwoD from 'src/component/Project/2D'
import InteriorService from 'src/component/Service/InteriorService'
import ExteriorService from 'src/component/Service/ExteriorService'
import TwoDService from 'src/component/Service/TwoDService'
import FurnitureService from 'src/component/Service/FurnitureService'
import DynamicInterior from 'src/component/DynamicProject/DynamicInterior'
import DynamicFurniture from 'src/component/DynamicProject/DynamicFurniture'
import DynamicExterior from 'src/component/DynamicProject/DynamicExterior'
import Dynamic2D from 'src/component/DynamicProject/Dynamic2D'
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
          element: <Services />
        },
        {
          path: 'interior-rendering',
          element: <Outlet />,
          children: [
            {
              path: '',
              index: true,
              element: <Interior />
            },
            {
              path: 'details/:name',
              element: <DynamicInterior />
            }
          ]
        },
        {
          path: 'furniture-modeling',
          children: [
            {
              path: '',
              index: true,
              element: <Furniture />
            },
            {
              path: 'details/:name',
              element: <DynamicFurniture />
            }
          ]
        },
        {
          path: 'exterior-rendering',
          children: [
            {
              path: '',
              index: true,
              element: <Exterior />
            },
            {
              path: 'details/:name',
              element: <DynamicExterior />
            }
          ]
        },
        {
          path: '2d',
          children: [
            {
              path: '',
              index: true,
              element: <PageTwoD />
            },
            {
              path: 'details/:name',
              element: <Dynamic2D />
            }
          ]
        }
      ]
    },
    {
      path: 'services',
      element: (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ),
      children: [
        {
          path: '',
          index: true,
          element: <Services />
        },
        {
          path: 'interior-rendering',
          element: <InteriorService />
        },
        {
          path: 'furniture-modeling',
          element: <FurnitureService />
        },
        {
          path: 'exterior-rendering',
          element: <ExteriorService />
        },
        {
          path: '2d',
          element: <TwoDService />
        }
      ]
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
