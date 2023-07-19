  




const Pirate = require ("../models/pirates.model")

 
 // get all
module.exports.findAll = (request,response) =>{
    Pirate.find().sort({name:1})  // sort by name alphabet
    .then((allDaPirates)=>{
        response.json(allDaPirates)   
    })
    .catch(err=>response.json(err))
}


//create

module.exports.addPirate = (request,response) =>{
    Pirate.create(request.body) 
    .then((newPirate)=>{
        console.log("Pirate Succefully")
        response.json(newPirate) 

    })
    .catch(err=> response.status(400).json(err))         
    
}




// getone

module.exports.findOne = (request,response) =>{
    Pirate.findById(request.params.id)
    
    .then((onePirate)=>{
        response.json(onePirate)  

    })
    .catch(err=>response.json(err))
}


// update


module.exports.updatePirate = (request,response) =>{
    Pirate.findByIdAndUpdate(request.params.id, request.body,{new:true, runValidators:true})
    
    .then((result)=>{
        response.json(result)  

    })
    .catch(err=>response.status(400).json(err))
}

// delete

module.exports.deletePirate = (request,response) =>{
    Pirate.findByIdAndDelete(request.params.id)
    
    .then((result)=>{
        response.json({result:result})  

    })
    .catch(err=>response.json(err))
}