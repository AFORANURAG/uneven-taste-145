const express = require('express');
const DoctorRouter = express.Router();
const Doctor = require('../model/Doctor.model');

// Get all doctors
DoctorRouter.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.findAll();
        res.json(doctors);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get a specific doctor by ID
DoctorRouter.get('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id);
        if (doctor) {
            res.json(doctor);
        } else {
            res.status(404).json({ message: 'Doctor not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new doctor
DoctorRouter.post('/', async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json(doctor);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


DoctorRouter.put('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id);
        if (doctor) {
            await doctor.update(req.body);
            res.json(doctor);
        } else {
            res.status(404).json({ message: 'Doctor not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a doctor by ID
DoctorRouter.delete('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id);
        if (doctor) {
            await doctor.destroy();
            res.json({ message: 'Doctor deleted' });
        } else {
            res.status(404).json({ message: 'Doctor not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = { DoctorRouter };
