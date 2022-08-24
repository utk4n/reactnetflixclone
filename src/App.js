import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
