const express = require('express');
const DepartmentRouter = express.Router();
const Department = require('../model/department.model');

DepartmentRouter.get('/', async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = { DepartmentRouter };
