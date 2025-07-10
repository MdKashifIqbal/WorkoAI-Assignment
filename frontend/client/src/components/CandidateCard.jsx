import React from 'react';
import StatusDropdown from './StatusDropDown';

const CandidateCard = ({ candidate, refresh }) => {
  const { name, jobTitle, status, _id } = candidate;

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600"><strong>Job Title:</strong> {jobTitle}</p>
      <p className="text-gray-600"><strong>Status:</strong> {status}</p>

      <div className="mt-4">
        <StatusDropdown candidateId={_id} currentStatus={status} refresh={refresh} />
      </div>
    </div>
  );
};

export default CandidateCard;
