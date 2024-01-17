//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home//Home";
import Auth from "./Components/Auth/Auth";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./ErrorPage";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);
  return (
    <>
    <Header theme={[mode, setMode]}></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
