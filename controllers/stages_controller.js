// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db 
const { Op } = require('sequelize')

// Index Route
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll(
            {
                order: [['available_start_time','asc']],
                where: 
                {
                    name: {[Op.like]: `%${req.query.name ? req.query.name : ''}%`}
                }
            }
        )
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})
// Show Route
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create Route
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// Update Route
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Delete Route
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



// EXPORT
module.exports = stages