import React from 'react';
import './App.css';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/employee-list" element={<EmployeeList />} />
                    <Route path="/" element={<CreateEmployee />} />
                </Routes>
        </Router>
    );
}

export default App;
