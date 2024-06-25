import React, { useContext, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { EmployeeContext } from '../store/EmployeeContext';
import '../App.css';
const EmployeeList = () => {
    const { employees } = useContext(EmployeeContext);
    const [search, setSearch] = useState('');

    const filteredEmployees = useMemo(() => {
        const searchTerms = search.split(' ').filter(term => term);
        const regex = new RegExp(searchTerms.join('|'), 'i');
        
        return employees.filter((employee) => 
            regex.test(employee.firstName) ||
            regex.test(employee.lastName) ||
            regex.test(employee.department) ||
            regex.test(employee.street) ||
            regex.test(employee.city) ||
            regex.test(employee.state) ||
            regex.test(employee.zipCode) ||
            regex.test(new Date(employee.dateOfBirth).toLocaleDateString()) ||
            regex.test(new Date(employee.startDate).toLocaleDateString())
        );
    }, [employees, search]);

    const columns = [
        { name: 'First Name', selector: row => row.firstName, sortable: true },
        { name: 'Last Name', selector: row => row.lastName, sortable: true },
        { name: 'Start Date', selector: row => new Date(row.startDate).toLocaleDateString(), sortable: true },
        { name: 'Department', selector: row => row.department, sortable: true },
        { name: 'Date of Birth', selector: row => new Date(row.dateOfBirth).toLocaleDateString(), sortable: true },
        { name: 'Street', selector: row => row.street, sortable: true },
        { name: 'City', selector: row => row.city, sortable: true },
        { name: 'State', selector: row => row.state, sortable: true },
        { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
    ];

    const subHeaderComponent = (
        <input
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
        />
    );

    return (
        <div className="container-employees">
            <h1>Current Employees</h1>
            <DataTable
                columns={columns}
                data={filteredEmployees}
                pagination
                subHeader
                subHeaderComponent={subHeaderComponent}
            />
            <Link to="/">Home</Link>
        </div>
    );
};

export default EmployeeList;
