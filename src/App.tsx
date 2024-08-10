import './App.css'
import useRouterElements from '../useRouterElement'
import { useEffect } from 'react'
function App() {
  const element = useRouterElements()
  useEffect(() => {
    function handleContextMenu(e: any) {
      e.preventDefault() // prevents the default right-click menu from appearing
    }
    // add the event listener to the component's root element
    const rootElement = document.getElementById('my-component')
    rootElement?.addEventListener('contextmenu', handleContextMenu)
    // remove the event listener when the component is unmounted

    return () => {
      rootElement?.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])
  return <div className='App'>{element}</div>
}

export default App
