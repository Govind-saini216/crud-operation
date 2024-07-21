const mongoose =  require ('mongoose');

const userschema = new mongoose.Schema({
    fname:{
        type:String , 
        require:true
    },
    lname:{
        type:String , 
        require:true
    },
    email:{
        type:String , 
        require:true
    },
    password:{
        type:String , 
        require:true
    },
})

const modal = new mongoose.model('user',userschema);

module.exports = modal ; 