import React, { useEffect, useState } from 'react';
import { getCandidates } from '../api/api';
import CandidateCard from './CandidateCard';

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all candidates
  const fetchCandidates = async () => {
    try {
      const data = await getCandidates();
      setCandidates(data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, [candidates]);

  // Filter candidates by job title or status
  const filteredCandidates = candidates.filter((candidate) => {
    const job = candidate.jobTitle.toLowerCase();
    const status = candidate.status.toLowerCase();
    return (
      job.includes(searchTerm.toLowerCase()) ||
      status.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="mt-8 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">📋 Candidate Dashboard</h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by job title or status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Candidate Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate) => (
            <CandidateCard
              key={candidate._id}
              candidate={candidate}
              refresh={fetchCandidates}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No candidates found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
