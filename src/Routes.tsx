import { Route, Routes } from 'react-router-dom';
import { DefaultLayoult } from './layouts/DefaultLayout';
import { CopleteOrderPage } from './pages/CompleteOrder';
import { HomePage } from './pages/Home';


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayoult />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/Complement' element={< CopleteOrderPage />} />
      </Route>
    </Routes >
  )
}
