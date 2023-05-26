import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { Provider } from "react-redux"
import store from './store'


const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
