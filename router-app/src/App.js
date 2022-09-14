import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import Layout from './components/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<PageOne/>}/>
          <Route path='/PageTwo' element={<PageTwo/>}/>
          <Route path='/PageThree' element={<PageThree/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
