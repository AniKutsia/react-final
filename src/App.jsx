import Main from "./components/main";
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-600 py-10 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        Game of Thrones
      </h1>

      <Router>
        <div className="flex justify-center mt-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
          </nav>
        </div>

        

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
