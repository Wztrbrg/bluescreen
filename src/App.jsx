import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Content from './pages/Content';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/content' element={<Content />} />
      </Routes>
    </>
  )
}

export default App
