import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Aside from './components/aside'
import MenuBar from './components/menuBar'
import { routes } from './constansts/routes'

function App() {

  return (
    <>
     <div className="wrap container">
        <Aside />
        <div className="content">
          <header>
            <MenuBar />
          </header>
          <main className='containerRoute '>
            <Routes>
              {routes.map((item, i) => (
                <Route key={i} path={item.path} element={item.element} />
            ))}
            </Routes>
          </main>
        </div>
     </div>
    </>
  )
}

export default App
