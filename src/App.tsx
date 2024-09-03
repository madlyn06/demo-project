import './App.css'
import useRouterElements from '../useRouterElement'
import { useEffect, useRef, useState } from 'react'
import { CustomSwitch } from './component/LoadingBar/LoadingBar'
import LoadingBar from 'react-top-loading-bar'
import { useLocation } from 'react-router-dom'
function App() {
  const element = useRouterElements()
  const [progress, setProgress] = useState(0)
  const loadingBarRef = useRef<any>(null)
  const location = useLocation()

  useEffect(() => {
    function handleContextMenu(e: any) {
      e.preventDefault()
    }
    const rootElement = document.getElementById('my-component')
    rootElement?.addEventListener('contextmenu', handleContextMenu)

    return () => {
      rootElement?.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])
  useEffect(() => {
    loadingBarRef.current.continuousStart()
    const timer = setTimeout(() => {
      loadingBarRef.current.complete()
    }, 500)
    return () => clearTimeout(timer)
  }, [location.pathname])
  console.log()
  return (
    <div className='App'>
      <LoadingBar
        color='#ccc'
        loaderSpeed={500}
        height={3}
        ref={loadingBarRef}
        onLoaderFinished={() => setProgress(0)}
      />
      <div>{element}</div>
    </div>
  )
}

export default App
