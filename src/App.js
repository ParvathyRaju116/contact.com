import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import SingleView from './pages/SingleView';
import './bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import './style.css'




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/view/:id' element={<SingleView />}></Route>
      </Routes>






      <Footer />



    </div>
  );
}

export default App;
