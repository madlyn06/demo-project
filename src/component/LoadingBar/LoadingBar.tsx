import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'

export const CustomSwitch = () => {
  const [progress, setProgress] = useState(false)
  const [prevLoc, setPrevLoc] = useState('')
  const location = useLocation()
  useEffect(() => {
    setPrevLoc(location.pathname)
    setProgress(true)
    if (location.pathname === prevLoc) {
      setPrevLoc('')
    }
  }, [location])

  useEffect(() => {
    setProgress(false)
  }, [prevLoc])

  TopBarProgress.config({
    barColors: {
      '0': 'red',
      '1.0': 'red'
    },
    barThickness: 5
  })
  return <>{progress && <TopBarProgress />}</>
}
