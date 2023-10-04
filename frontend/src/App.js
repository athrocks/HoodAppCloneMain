import './App.scss';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/main" element={<Main />} />

          <Route path="/stores" element={<SignUp />} />

          <Route path="*" element={<Error />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
