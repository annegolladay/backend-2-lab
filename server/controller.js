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
            price: +price,
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

        let priceUpdate = houses[index].price //have to spell out when actually trying to update the price in the if/else statements

        //most specific case goes first in the conditionals

        if (priceUpdate <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000 
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send('Update failed.')
        }

        // if (type === 'plus') {
        //     priceUpdate += 10000 
        //     res.status(200).send(houses)
        // } else if (type === 'minus') {
        //     priceUpdate -= 10000
        //     res.status(200).send(houses)
        // }
        
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












