import React, { useState } from 'react';
import DatePickerComponent from './DatePickerComponent';

const CreateEmployee = () => {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        startDate: new Date(),
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Employee Created: ", employee);
    };

    return (
        <div className="container">
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" value={employee.firstName} onChange={handleChange} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" value={employee.lastName} onChange={handleChange} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePickerComponent />

                <label htmlFor="start-date">Start Date</label>
                <DatePickerComponent />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" value={employee.street} onChange={handleChange} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city" value={employee.city} onChange={handleChange} />

                    <label htmlFor="state">State</label>
                    <input id="state" type="text" name="state" value={employee.state} onChange={handleChange} />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zipCode" value={employee.zipCode} onChange={handleChange} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" value={employee.department} onChange={handleChange}>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>

                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default CreateEmployee;
