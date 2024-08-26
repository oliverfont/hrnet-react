import React, { useState, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'm0d4l_plugin';
import closeIcon from '../assets/close.png';
import { EmployeeContext } from '../store/EmployeeContext';
import '../App.css';
import states from '../data/states';

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

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { addEmployee } = useContext(EmployeeContext);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleDateChange = useCallback((name, date) => {
        setEmployee((prev) => ({ ...prev, [name]: date }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(employee);
        setEmployee({
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
                    <DatePicker id='date-of-birth' className='date' selected={employee.dateOfBirth} onChange={(date) => handleDateChange('dateOfBirth', date)} />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker id='start-date' className='date' selected={employee.startDate} onChange={(date) => handleDateChange('startDate', date)} />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" name="street" value={employee.street} onChange={handleChange} />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city" value={employee.city} onChange={handleChange} />

                        <label htmlFor="state">State</label>
                        <select id="state" name="state" value={employee.state} onChange={handleChange}>
                            {states.map((state) => (
                                <option key={state.abbreviation} value={state.abbreviation}>
                                    {state.name}
                                </option>
                            ))}
                        </select>

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

                <Modal 
                    isOpen={modalIsOpen} 
                    onClose={closeModal} 
                    size="" 
                    closeIcon={closeIcon}
                    customStyles={{
                        modal: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                        modalContent: { padding: '5px 15px', borderRadius: '10px' },
                        body: { color: '#333' }
                    }}
                >
                    <p>Employee Created!</p>
                </Modal>
            </div>
        </div>
    );
};

export default CreateEmployee;
