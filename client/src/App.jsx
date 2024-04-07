import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Form from "./components/Form";
import Layout from './layout/Layout';
import Login from './components/Login';
import Error from './components/Error';
import About from './components/About';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Form />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}