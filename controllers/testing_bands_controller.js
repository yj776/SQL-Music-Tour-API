// Creating a bands controller here. The purpose of this controller is to provide routes 
// Just some Practice Here. 

// Set up dependencies - Express Router, all model as db, class from db, {op} from sequelize 
const bands = require('express').Router
const db = require('../models')
const {Band, Events, MeetGreet} = db
const { Op } = require('sequelize')
const band = require('../models/band')

// CRUD

// Read/Get All bands
bands.get('/', async (req, res) => {
    try{
        const foundBands = await Band.findAll({
            order: [['available_start_time', 'asc']],
            where:
            {
                name: {[Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundBands)
    } catch(error){
        res.status(200).json(error)
    }
})

// Read/Get Specific Band
bands.get('/:name', async(req, res)  => {
    try{
        const foundBand = await Band.findOne({
            where: { name: req.params.name },
            include: {
                model: MeetGreet,
                as: "meet_greets",
                include:{model: Event, as:"event"}
            }
        })
        res.status(200).json(foundBand)
    } catch(error){
        res.status(404).json(error)
    }

})

// Create Bands
bands.post('/', async(req,res) => {
    try{
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band' ,
            data: newBand
        })

    } catch(error){
        res.status(404).json(error)
    }

})

// Delete bands (delete)
bands.delete('/:id', async(req,res) => {
    try{
        const deletedBands = await Band.destroy({
            where: {band_id: req.paramas.id}
        })
        res.status(200).json(`Successfully delete ${deletedBands}`)

    }catch(error){
        res.status(404).json('error')
    }

})

// Update bands (post)

