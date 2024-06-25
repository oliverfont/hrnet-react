import React from 'react';
import './App.css';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EmployeeProvider } from './store/EmployeeContext';

function App() {
    return (
        <EmployeeProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/employee-list" element={<EmployeeList />} />
                        <Route path="/" element={<CreateEmployee />} />
                    </Routes>
                </div>
            </Router>
        </EmployeeProvider>
    );
}

export default App;
