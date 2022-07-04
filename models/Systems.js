var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const SystemSchema = new Schema( {
    Name: {
        type: String,
	  required: true
       
    },

Architecture : {
        type: String,
	  required: false
        
    },

    Release_Date: {
        type: String,
	  required: true
        
    },
    
Launch_Titles: {
        type: Number,
	  required: true
       
    },


Media: {
        type: String,
	  required: true
        
    },


Type: {
        type: String,
	  required: true
        
    }




   
});


module.exports = mongoose.model("Systems", SystemSchema,"Systems");