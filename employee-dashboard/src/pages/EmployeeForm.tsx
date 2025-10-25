import React, { useState } from 'react';

const EmployeeForm: React.FC = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, designation, location, salary });
    };

    return (
        <div className="employee-form">
            <h2>Employee Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Designation:</label>
                    <input 
                        type="text" 
                        value={designation} 
                        onChange={(e) => setDesignation(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input 
                        type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Salary:</label>
                    <input 
                        type="number" 
                        value={salary} 
                        onChange={(e) => setSalary(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EmployeeForm;