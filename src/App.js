import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EmployeeProvider } from './store/EmployeeContext';


const CreateEmployee = lazy(() => import('./components/CreateEmployee'));
const EmployeeList = lazy(() => import('./components/EmployeeList'));

function App() {
    return (
        <EmployeeProvider>
            <Router>
                <div className="App">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/employee-list" element={<EmployeeList />} />
                        <Route path="/" element={<CreateEmployee />} />
                    </Routes>
                </Suspense>
                </div>
            </Router>
        </EmployeeProvider>
    );
}

export default App;
