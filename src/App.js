import React from "react";
import "./App.css";
import { Footer } from "./ui/components/Footer";
import { Header } from "./ui/components/Header";
import { Chat } from "./ui/pages/Chat";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./ui/pages/Settings";
import { Contacts } from "./ui/pages/Contacts";
import { Profile } from "./ui/pages/Profile";
import { Exit } from "./ui/pages/Exit";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Chat />} path="/"></Route>
        <Route element={<Settings />} path="settings">
          <Route element={<Profile />} path="profile"></Route>
          <Route element={<Exit />} path="exit"></Route>
        </Route>
        <Route element={<Contacts />} path="contacts"></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
