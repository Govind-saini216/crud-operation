const User = require('../modules/UserModals.js');


const create = async (req,res) => {

    try {
        const data = new User(req.body);
        if(!data){
          return res.status(404).json({msg:"user data is not found"});
        }
        const datasave =  await  data.save();
        res.status(200).json({datasave , msg:"user created successfully"});
               
    } catch (error) {
        res.status(500).json({error:error});
    }
}


const getall = async (req,res) => {
    try {    
        const getdata = await User.find(); 
        if(!getdata){
            return res.status(404).json({msg:"user GetAll Api data is not found"})
        }
        res.status(200).json(getdata);

    } catch (error) {
        res.status(500).json({error:error});
    }
}


const getone = async (req ,res)=>{
    try {

        const id = req.params.id ; 
        const getdata = await User.findById(id);
         if(!getdata){
            return res.status(404).json({msg:"user id is not save data base"});
         }
         res.status(200).json(getdata);

    } catch (error) {
        res.status(500).json({error:error});
    }
}

const update = async (req,res) =>{
try {
    const id = req.params.id;  
    const exictdata = await User.findById(id);
    if(!exictdata){
        return res.status(404).json({msg:"user not found"});
    }
    const updates =  await User.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json({updates,msg:"your data is successfully updated"});
    
} catch (error) {
    res.status(500).json({"update errors":error});  
}
}


const deleted = async(req,res)=>{
    try {
        const id = req.params.id;
        const userexict = await User.findById(id);
        if(!userexict){
            return res.status(404).json({msg:"user not found Delete method"});
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"usere delete successfully"});
        
    } catch (error) {
        res.status(500).json({"update errors":error});  
    }
}


module.exports = {create,getall,getone,update,deleted};