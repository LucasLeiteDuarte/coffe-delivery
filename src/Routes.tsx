import { Route, Routes } from 'react-router-dom';
import { HeaderPage } from './pages/Header';
import { HomePage } from './pages/Home';


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Header' element={<HeaderPage />} />
    </Routes >
  )
}
