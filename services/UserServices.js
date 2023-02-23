const dbclient = require('../utils/db')

const StudentServices = {
    logStudentHome : (req, res) => {
        res.send('User home route!')
    },

    registerUser: async(req, res) => {
        try{
            const collection = await dbclient.db('Chatter').collection('Users')
            const result = await collection.insertOne({name: 'Ratik Vig'})
            res.status(200).send(result)
        }catch(error){
            console.log(error)
            res.status(500).send(error)
        }
    }
}

module.exports = StudentServices