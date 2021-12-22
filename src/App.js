import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './views/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Search from './views/search';
function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/search" element={ <Search />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
