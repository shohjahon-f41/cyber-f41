import { Route, Routes } from 'react-router-dom'
import { routes } from '../data/routes'
import { NotFound } from '../pages'

function Main() {
  return (
    <main className='main'>
        <Routes>
            {routes.map(item => (
                <Route path={item.path} element={item.element} key={item.path} />
            ))}
        </Routes>
        
    </main>
  )
}

export default Main