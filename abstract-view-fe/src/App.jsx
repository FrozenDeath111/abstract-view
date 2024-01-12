//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home//Home";
import Auth from "./Components/Auth/Auth";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
    </div>
  );
}

export default App;
