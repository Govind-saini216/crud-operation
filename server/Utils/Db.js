const mongoose  = require ('mongoose');
const MONGOOSE_URI = `mongodb+srv://govindsain7737:govindsaini12345@mern-2023-project.1rabuaz.mongodb.net/crud-operations`;


const Database = async () =>{
try {
    await mongoose.connect(MONGOOSE_URI);
    console.log("data base is connected");

} catch (error) {
    console.error("data base is not connected" , error)
    process.exit(0)
}}

module.exports = Database;