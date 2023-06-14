import { Route, Routes } from 'react-router-dom';
import { DefaultLayoult } from './layouts/DefaultLayout';
import { ComplementPage } from './pages/Complement';
import { HomePage } from './pages/Home';


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayoult />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/Complement' element={< ComplementPage />} />
      </Route>
    </Routes >
  )
}
