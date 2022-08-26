import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
