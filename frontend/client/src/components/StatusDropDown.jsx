import React, { useState } from 'react';
import { updateCandidateStatus } from '../api/api';

const StatusDropdown = ({ candidateId, currentStatus, refresh }) => {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    setLoading(true);

    try {
      await updateCandidateStatus(candidateId, newStatus);
      refresh(); 
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <select
      value={selectedStatus}
      onChange={handleChange}
      disabled={loading}
      className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
    >
      <option value="pending">Pending</option>
      <option value="reviewed">Reviewed</option>
      <option value="hired">Hired</option>
    </select>
  );
};

export default StatusDropdown;
