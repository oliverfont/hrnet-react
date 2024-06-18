import React from 'react';
import DataTable from 'react-data-table-component';

const EmployeeList = () => {
    const columns = [
        { name: 'First Name', selector: row => row.firstName, sortable: true },
        { name: 'Last Name', selector: row => row.lastName, sortable: true },
        { name: 'Start Date', selector: row => row.startDate, sortable: true },
        { name: 'Department', selector: row => row.department, sortable: true },
        { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
        { name: 'Street', selector: row => row.street, sortable: true },
        { name: 'City', selector: row => row.city, sortable: true },
        { name: 'State', selector: row => row.state, sortable: true },
        { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
    ];

    const data = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            startDate: '2022-01-01',
            department: 'Engineering',
            dateOfBirth: '1990-01-01',
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zipCode: '12345',
        },
    ];

    return (
        <div className="container">
            <h1>Current Employees</h1>
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
            <a href="/">Home</a>
        </div>
    );
};

export default EmployeeList;
