import { PatientFormViewProps } from '@/models/patientViewProps';
import React from 'react';



const PatientForm: React.FC<PatientFormViewProps> = ({
    formData,
    onChange,
    onGenderChange,
    onSubmit,
}) => {
    return (

        <div className="bg-gray-100 py-10">
            <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Patient Form</h2>
                <form className="space-y-4" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name='firstName'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={formData.firstName}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="middleName" className="block text-gray-700 text-sm font-bold mb-2">
                            Middle Name (Optional)
                        </label>
                        <input
                            type="text"
                            id="middleName"
                            name='middleName'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.middleName}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name='lastName'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={formData.lastName}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dob"
                            name='dob'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={formData.dob}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                        <div className="flex items-center space-x-4">
                            <div>
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                    checked={formData.gender == 'male'}
                                    onChange={onGenderChange}
                                />
                                <label htmlFor="male" className="ml-2 text-gray-700 text-sm">
                                    Male
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                    checked={formData.gender == 'female'}
                                    onChange={onGenderChange}
                                />
                                <label htmlFor="female" className="ml-2 text-gray-700 text-sm">
                                    Female
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="other"
                                    className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                    checked={formData.gender == 'other'}
                                    onChange={onGenderChange}
                                />
                                <label htmlFor="other" className="ml-2 text-gray-700 text-sm">
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name='phone'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={formData.phone}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={formData.email}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name='address'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={formData.address}
                            onChange={onChange}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="preferredLanguage" className="block text-gray-700 text-sm font-bold mb-2">
                            Preferred Language
                        </label>
                        <select
                            id="preferredLanguage"
                            name='preferredLanguage'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={formData.preferredLanguage}
                            onChange={onChange}
                        >
                            <option value="">Select Language</option>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="thai">Thai</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="nationality" className="block text-gray-700 text-sm font-bold mb-2">
                            Nationality
                        </label>
                        <input
                            type="text"
                            id="nationality"
                            name='nationality'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={formData.nationality}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Emergency Contact (Optional)</label>
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="emergencyName" className="block text-gray-700 text-sm font-bold mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="emergencyName"
                                    name='emergencyName'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={formData.emergencyName}
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="emergencyRelationship"
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                >
                                    Relationship
                                </label>
                                <input
                                    type="text"
                                    id="emergencyRelationship"
                                    name='emergencyRelationship'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={formData.emergencyRelationship}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="religion" className="block text-gray-700 text-sm font-bold mb-2">
                            Religion (Optional)
                        </label>
                        <input
                            type="text"
                            id="religion"
                            name='religion'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.religion}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientForm;