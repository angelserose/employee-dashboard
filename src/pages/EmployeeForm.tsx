import React, { useState } from 'react';

const EmployeeForm: React.FC = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, designation, location, salary });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h2 className="h4 mb-0">Add New Employee</h2>
                        </div>
                        <div className="card-body">
                            {showSuccess && (
                                <div className="alert alert-success" role="alert">
                                    Form submitted successfully!
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="bi bi-person"></i>
                                        </span>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={name} 
                                            onChange={(e) => setName(e.target.value)} 
                                            required 
                                            placeholder="Enter employee name"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Designation</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="bi bi-briefcase"></i>
                                        </span>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={designation} 
                                            onChange={(e) => setDesignation(e.target.value)} 
                                            required 
                                            placeholder="Enter designation"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Location</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="bi bi-geo-alt"></i>
                                        </span>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={location} 
                                            onChange={(e) => setLocation(e.target.value)} 
                                            required 
                                            placeholder="Enter location"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Salary</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="bi bi-currency-dollar"></i>
                                        </span>
                                        <input 
                                            type="number" 
                                            className="form-control"
                                            value={salary} 
                                            onChange={(e) => setSalary(e.target.value)} 
                                            required 
                                            placeholder="Enter annual salary"
                                        />
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        <i className="bi bi-check-circle me-2"></i>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeForm;