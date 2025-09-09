import Home from "../Home";
import Register from "../Register";
import Login from "../Login";
import Profile from "../Profile";
import { Route, Routes } from 'react-router-dom'
import NoMatch from "../Nomatch";
import Feed from "../Feed";
import Headers from "../Header";
import './styles.css';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;


