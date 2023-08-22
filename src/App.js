import { BrowserRouter as HashRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';



import './styles/app.scss'
import './styles/Header.scss'
import './styles/Home.scss'
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/mediaquery.scss'


function App() {
  return (
   <HashRouter>

    < Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path= '/Contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/>
    </Routes>
    <Footer/>
   </HashRouter>
  );
}

export default App;
