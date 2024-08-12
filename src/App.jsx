import './app.scss';
import ThemeProvider from './utils/ThemeContext';
import MainPage from "./components/mainpage/MainPage";
import Portfolio from './components/portfolio/Portfolio';
import Apply from "./components/apply/Apply";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import MServices from './components/services/MServices';
import Testimonials from './components/testimonials/Testimonials';
// Testimonials

const App = () => {
  return (
      <>
      <ThemeProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/apply' element={<Apply />}/>
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
      </>
  )
};

export default App;
