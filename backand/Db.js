const monogoos = require('mongoose')
// require("dotenv/config")
const mongoURI = '// mongodb + srv://khan:khanjan@cluster0.vastk.mongodb.net/artical_db?retryWrites=true&w=majority'

const connectToMongo = () => {
    monogoos.connect(mongoURI, () => {
        console.log('connected to Mongo successfully!!')
    })
}
// monogoos.connect(process.env.Db_Connect,()=> console.log("Connected sucessful!!!"))

module.exports = connectToMongo