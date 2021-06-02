//Function signatures
const houses = require('./db.json')
let globalId = 4


module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body

        //const index = houses.findIndex((house) => house.id === +id)

        const newHouse = {
            id: globalId,
            address: address,
            price: price,
            imageURL: imageURL
        }

        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++

    },
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        const index = houses.findIndex((house) => {
            return house.id === +id
        })

        const priceUpdate = houses[index].price

        if (type === 'plus') {
            priceUpdate += 10000 
            res.status(200).send(houses)
        } else if (type === 'minus') {
            priceUpdate -= 10000
            res.status(200).send(houses)
        }
        
    },
    deleteHouse: (req, res) => {
        //console.log(req.params)
        const {id} = req.params
        //console.log(id)
        //console.log(typeof id)
        const index = houses.findIndex((house) => {
            return house.id === +id
        })
        //console.log(index)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }
}












