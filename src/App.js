import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Pricing from './pages/pricing/pricing';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/pricing' element={<Pricing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
