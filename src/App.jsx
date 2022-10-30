import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./app.css";
import Home from './components/home/Home';
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={ <Layout />}>
       <Route index element={<Home />}/>
      </Route>
    </Routes>
    </BrowserRouter>
     
      
  );
};

export default App;
