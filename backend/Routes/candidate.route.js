const express = require('express');
const router = express.Router();

const {
  createCandidate,
  getAllCandidates,
  updateCandidateStatus,
  deleteCandidate,
} = require('../controllers/candidate.controllers');

// POST 
router.post('/candidates', createCandidate);

// GET
router.get('/candidates', getAllCandidates);

// PUT 
router.put('/candidates/:id', updateCandidateStatus);

// DELETE 
router.delete('/candidates/:id', deleteCandidate);

module.exports = router;
