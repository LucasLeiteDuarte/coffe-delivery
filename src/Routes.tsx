import { Route, Routes } from 'react-router-dom';
import { DefaultLayoult } from './layouts/DefaultLayout';
import { CompleteOrderPage } from './pages/CompleteOrder';
import { HomePage } from './pages/Home';


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayoult />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/CompleteOrder' element={< CompleteOrderPage />} />
      </Route>
    </Routes >
  )
}
