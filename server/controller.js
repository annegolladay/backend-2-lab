//Function signatures
const houses = require('./db.json')
let globalId = 4


module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        
    },
    updateHouse: (req, res) => {
        
    },
    deleteHouse: (req, res) => {
        console.log(req.params)
        const {id} = req.params
        console.log(id)
        //console.log(typeof id)
        const index = houses.findIndex((house) => {
            return house.id === +id
        })
        console.log(index)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }
}












