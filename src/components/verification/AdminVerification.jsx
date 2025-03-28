import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminVerification = () => {
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleVerification = () => {
        const adminPasscode = process.env.REACT_APP_ADMIN_PASSCODE;

        if (passcode === adminPasscode) {
            navigate('/admin'); // Redirect to the admin page
        } else {
            setError('Incorrect passcode. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Admin Verification
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="passcode"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Passcode
                    </label>
                    <input
                        id="passcode"
                        type="password"
                        placeholder="Enter passcode"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                    />
                </div>
                <button
                    onClick={handleVerification}
                    className="w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-200"
                >
                    Verify
                </button>
                {error && (
                    <p className="mt-4 text-sm text-red-500 text-center">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AdminVerification;
