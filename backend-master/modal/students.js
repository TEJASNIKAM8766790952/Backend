const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{
        type:"String",
        require:true
    },

    Roll:{
        type:"Number",
        require:true
    },

    collage:{
        type:"String",
        require:true
    },

    Branch:{
        type:"String",

    }
})

const stItem=mongoose.model("stItem",studentSchema);
module.exports=stItem;