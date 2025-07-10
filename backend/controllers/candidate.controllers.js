const Candidate = require('../model/candidate.model');

// 1. Create a new candidate
const createCandidate = async (req, res) => {
  try {
    const { name, email, phone, jobTitle } = req.body;

    if (!name || !email || !phone || !jobTitle) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newCandidate = new Candidate({
      name,
      email,
      phone,
      jobTitle,
    });

    await newCandidate.save();
    res.status(201).json({
      message: 'Candidate referred successfully',
      candidate: newCandidate,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error while creating candidate',
      error: error.message,
    });
  }
};

// 2. Get all candidates
const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().sort({ createdAt: -1 });
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching candidates',
      error: error.message,
    });
  }
};

// 3. Update candidate status
const updateCandidateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'reviewed', 'hired'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const updatedCandidate = await Candidate.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json({
      message: 'Candidate status updated successfully',
      candidate: updatedCandidate,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating candidate status',
      error: error.message,
    });
  }
};

// 4. Delete candidate
const deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCandidate = await Candidate.findByIdAndDelete(id);
    if (!deletedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json({ message: 'Candidate deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting candidate',
      error: error.message,
    });
  }
};

// Exporting all controller functions
module.exports = {
  createCandidate,
  getAllCandidates,
  updateCandidateStatus,
  deleteCandidate,
};
