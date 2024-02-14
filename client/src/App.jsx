import React from "react";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Join from "./components/Join/Join.jsx";
import Chat from "./components/Chat/Chat.jsx";

const App = () => (
    //    <h1>helldjsofjd os1dfhodsfhoi</h1>
    <Router>
        <Routes>
            <Route path="/" element={<Join/>} />
            <Route path="/chat" element={<Chat />} />

        </Routes>
    </Router>
)

export default App
