const express = require('express');
const bcrypt =require('bcrypt');
const Eveniment=require('../database/models/Eveniment');
const router = express.Router();

router.get('/', async function (req, res) {
    try {
        const eveniments = await Eveniment.findAll();

        res.status(200).json(eveniments);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Error retrieving eveniments', data: {} })
    }
})

router.get('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const eveniment = await Eveniment.findByPk(id);
        if (!eveniment) {
            return res.status(404).json({ success: false, message: 'Eveniment not found', data: {} })
        }

        return res.status(200).json({ success: true, message: 'Eveniment was found ', data: eveniment });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Error finding eveniments by id', data: {} })
    }


})

router.post('/', async function (req, res) {
    try {
        const { nume, descriere, data, durata, organizator } = req.body;

        const eveniment = await Eveniment.create({
            nume,
            descriere,
            data,
            durata,
            organizator
        })

        console.log(eveniment);

        return res.status(201).json(eveniment);
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error creating eveniments', data: {} })
    }

})

router.put('/:nume', async function (req, res) {
    try {
        const nume = req.params.nume;
        const eveniment = await Eveniment.findOne({
            where: {
                nume: nume
            }
        })

        if (!eveniment) {
            return res.status(404).json({ success: false, message: 'Eveniment not found', data: {} })
        }

        const updatedEveniment = await eveniment.update(req.body);
        return res.status(200).json({ success: true, message: 'Eveniment updated', data: updatedEveniment })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error updating eveniments', data: {} })
    }
})

router.delete('/:nume', async function (req, res) {
    try {
        const nume = req.params.nume;
        const eveniment = await Eveniment.findOne({
            where: {
                nume: nume
            }
        })

        if (!eveniment) {
            return res.status(404).json({ success: false, message: 'Eveniment not found', data: {} })
        }

        await eveniment.destroy();

        res.status(200).json({ success: true, message: 'Eveniment deleted', data: {} })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error deleting eveniments', data: {} })
    }
})

module.exports=router;
