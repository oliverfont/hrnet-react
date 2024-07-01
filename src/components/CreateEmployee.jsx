import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from '../store/EmployeeContext';
import closeBtn from '../assets/close.png';
import $ from 'jquery';
import '../App.css';

const CreateEmployee = () => {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: ''
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { addEmployee } = useContext(EmployeeContext);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({ ...prev, [name]: value }));
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Ensure that jQuery is available globally
            window.jQuery = $;
            require('jquery-ui/ui/widgets/datepicker');
            require('./jquery-ui/ui/jquery.datetimepicker.full.min.js');

            $('#date-of-birth').datetimepicker({
                timepicker: false,
                format: 'Y-m-d',
                onSelectDate: (ct) => setEmployee((prev) => ({ ...prev, dateOfBirth: ct })),
            });
            $('#start-date').datetimepicker({
                timepicker: false,
                format: 'Y-m-d',
                onSelectDate: (ct) => setEmployee((prev) => ({ ...prev, startDate: ct })),
            });
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(employee);
        setEmployee({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            startDate: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            department: ''
        });
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>HRnet</h1>
                <Link to="/employee-list">View Current Employees</Link>
            </header>

            <div className="container">
                <h2>Create Employee</h2>
                <form onSubmit={handleSubmit} id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="firstName" value={employee.firstName} onChange={handleChange} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="lastName" value={employee.lastName} onChange={handleChange} />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input type="text" id="date-of-birth" name="dateOfBirth" value={employee.dateOfBirth} onChange={handleChange} />

                    <label htmlFor="start-date">Start Date</label>
                    <input type="text" id="start-date" name="startDate" value={employee.startDate} onChange={handleChange} />

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

                {modalIsOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={closeBtn}
                                alt="Close"
                                className="modal-close-button"
                                onClick={closeModal}
                            />
                            <p>Employee Created!</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateEmployee;
