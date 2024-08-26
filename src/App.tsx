import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./app/components/Main";
import NavigationBar from "./app/components/NavigationBar";
import Footer from "./app/components/Footer/footer";
import Resume from "./app/components/Resume";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
