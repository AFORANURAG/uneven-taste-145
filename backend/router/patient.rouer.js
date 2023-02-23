const express = require('express');
const PatientRouter = express.Router();
const { Patient } = require('../model/Patient.model');

// GET all patients
PatientRouter.get('/', async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.json(patients);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// GET a single patient by ID
PatientRouter.get('/:id', async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (patient) {
            res.json(patient);
        } else {
            res.status(404).send('Patient not found');
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// POST a new patient
PatientRouter.post('/', async (req, res) => {
    const { name, email, phone, dob } = req.body;
    try {
        const patient = await Patient.create({
            name,
            email,
            phone,
            dob,
        });
        res.json(patient);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// PUT update an existing patient
PatientRouter.put('/:id', async (req, res) => {
    const { name, email, phone, dob } = req.body;
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (patient) {
            await patient.update({
                name,
                email,
                phone,
                dob,
            });
            res.json(patient);
        } else {
            res.status(404).send('Patient not found');
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// DELETE a patient by ID
PatientRouter.delete('/:id', async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (patient) {
            await patient.destroy();
            res.json({ message: 'Patient deleted' });
        } else {
            res.status(404).send('Patient not found');
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = {PatientRouter};
