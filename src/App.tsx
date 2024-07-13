import './App.css'
import useRouterElements from '../useRouterElement'
function App() {
  const element = useRouterElements()
  return <div className='App'>{element}</div>
}

export default App
