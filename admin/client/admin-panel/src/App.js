import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import UserDetails from "./components/UserDetails";
// import UserView from "./components/UserView";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="admin-panel">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserDetails />} />
            {/* <Route path="/users/view/:userId" element={<UserView />} /> */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
