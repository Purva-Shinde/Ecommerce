import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
 import {Home, Category, Card} from "./pages/index";
 import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
 import {Provider} from 'react-redux';
  import store from './redux/store/store';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>  
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/category/:id" element = {<Category />} />
            <Route path = "/cart" element = {<Card />} />
          </Routes>
          <Footer />
        </BrowserRouter>
     </Provider>  
    </div>
  );
}

export default App;
