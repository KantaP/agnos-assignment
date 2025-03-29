import { StaffViewProps } from "@/models/staffViewProps";


const StaffView : React.FC<StaffViewProps> = ({ data }) => {
    return (
      <div className="min-h-screen bg-gray-100 py-10 flex items-center justify-center">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Patient Information</h2>
          <div className="space-y-4">
            {/* First Name */}
            <div>
              <dt className="text-gray-700 text-sm font-bold mb-1">First Name:</dt>
              <dd className="text-gray-800">{data.firstName}</dd>
            </div>
  
            {/* Middle Name (Optional) */}
            {data.middleName && (
              <div>
                <dt className="text-gray-700 text-sm font-bold mb-1">Middle Name:</dt>
                <dd className="text-gray-800">{data.middleName}</dd>
              </div>
            )}
  
            {/* Last Name */}
            <div>
              <dt className="text-gray-700 text-sm font-bold mb-1">Last Name:</dt>
              <dd className="text-gray-800">{data.lastName}</dd>
            </div>
  
            {/* Date of Birth */}
            <div>
              <dt className="text-gray-700 text-sm font-bold mb-1">Date of Birth:</dt>
              <dd className="text-gray-800">{data.dob}</dd>
            </div>
  
            {/* Gender */}
            <div>
              <dt className="text-gray-700 text-sm font-bold mb-1">Gender:</dt>
              <dd className="text-gray-800">{data.gender}</dd>
            </div>
  
            {/* Phone Number */}
            <div>
              <dt className="text-gray-700 text-sm font-bold mb-1">Phone Number:</dt>
              <dd className="text-gray-800">{data.phone}</dd>
            </div>
  
            {/* Email */}
            <div>
              <dt className="text-gray-700 text-sm font-bold mb-1">Email:</dt>
              <dd className="text-gray-800">{data.email}</dd>
            </div>
  
            {/* Address */}
            <div>
              <dt className="text-gray-700 text-sm font-bold mb-1">Address:</dt>
              <dd className="text-gray-800 whitespace-pre-wrap">{data.address}</dd>
            </div>
  
            {/* Preferred Language */}
            <div>
              <dt className="text-gray-700 text-sm font-bold mb-1">Preferred Language:</dt>
              <dd className="text-gray-800">{data.preferredLanguage}</dd>
            </div>
  
            {/* Nationality */}
            <div>
              <dt className="text-gray-700 text-sm font-bold mb-1">Nationality:</dt>
              <dd className="text-gray-800">{data.nationality}</dd>
            </div>
  
            {/* Emergency Contact (Optional) */}
            {data.emergencyName && data.emergencyRelationship && (
              <div>
                <dt className="text-gray-700 text-sm font-bold mb-1">Emergency Contact:</dt>
                <dd className="text-gray-800">
                  Name: {data.emergencyName}, Relationship: {data.emergencyRelationship}
                </dd>
              </div>
            )}
  
            {/* Religion (Optional) */}
            {data.religion && (
              <div>
                <dt className="text-gray-700 text-sm font-bold mb-1">Religion:</dt>
                <dd className="text-gray-800">{data.religion}</dd>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default StaffView;