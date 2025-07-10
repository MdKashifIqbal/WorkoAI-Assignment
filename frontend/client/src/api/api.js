const BASE_URL = 'http://localhost:3000';

// 1. Create a new candidate
export const createCandidate = async (candidateData) => {
  try {
    const res = await fetch(`${BASE_URL}/candidates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(candidateData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Error creating candidate');
    return data;
  } catch (error) {
    console.error('❌ createCandidate error:', error.message);
    throw error;
  }
};

// 2. Get all candidates
export const getCandidates = async () => {
  try {
    const res = await fetch(`${BASE_URL}/candidates`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Error fetching candidates');
    return data;
  } catch (error) {
    console.error('getCandidates error:', error.message);
    throw error;
  }
};

// 3. Update candidate status
export const updateCandidateStatus = async (id, status) => {
  try {
    const res = await fetch(`${BASE_URL}/candidates/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Error updating status');
    return data;
  } catch (error) {
    console.error('updateCandidateStatus error:', error.message);
    throw error;
  }
};
