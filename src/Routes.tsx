import { Route, Routes } from 'react-router-dom';
import { DefaultLayoult } from './layouts/DefaultLayout';
import { CompleteOrderPage } from './pages/CompleteOrder';
import { HomePage } from './pages/Home';
import { OrderConfirmedPage } from './pages/OrderConfirmed';


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayoult />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/Completar-Pedido' element={< CompleteOrderPage />} />
        <Route path='/orderConfirmed' element={< OrderConfirmedPage />} />
      </Route>
    </Routes >
  )
}
