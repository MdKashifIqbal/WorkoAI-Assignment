import React from 'react';
import ReferralForm from './components/ReferralForm';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Candidate Referral Management System
        </h1>
        <p className="text-gray-600 mt-2">
          Refer candidates, track their status, and manage referrals easily.
        </p>
      </header>

      {/* Referral Form */}
      <ReferralForm />

      {/* Dashboard */}
      <Dashboard />
    </div>
  );
};

export default App;
