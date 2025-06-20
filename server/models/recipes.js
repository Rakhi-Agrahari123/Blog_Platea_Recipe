const mongoose = require('mongoose')
const RecipeSchema = new mongoose.Schema({
    title: {
        type:'String',
        require:true,
    },
    description: {
        type:String,
        require:true,
    },
   image: {
        type:String,
        default:"",
    },
    ingredients: {
        type: [String],                           
        require:true,
    },
    steps: {
        type:[String],
        require:true,
    },
    tags: {
        type: [String],
        default:[],
    },
    cuisines: [{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'Cuisine' 

    }],
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true,
    },
    likes: {
        type:Number,
        default: 0,
    },
    likesBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
   createdAt: {
        type: Date,
        default:Date.now
    },
})

module.exports = mongoose.model('Recipe', RecipeSchema);