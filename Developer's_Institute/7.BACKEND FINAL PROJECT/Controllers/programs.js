Products=require('../models/programs');


exports.allPrograms = async(request, reply) => {    
    results=await Programs.findAll();
    reply.json({"message": results});

};

exports.oneProgram = async(request, reply) => {
    id=request.params.id;

    result=await Programs.findOne({
        where: {
            id: id
        }
    });
    reply.json({"message": result});
}


exports.deleteProgram = async(request, reply) => {
    id=request.params.id;
    result=await Products.destroy({
        where: {
            id: id
        }
    });
    reply.json({"message": "Deleted successfully"});
}

exports.addProgram = async(request, reply) => {

    newProgram={
        name: request.body.name,
        price: request.body.price,
        quantity: request.body.quantity, //date
        description: request.body.description
    };
    //get all programs
    programs=await Programs.findAll();
    nextId=Object.keys(programs).length+1;
    Programs.create(newProgram)
    .then((program) => {
        reply.json({message: "Added successfully"});
    })
    .catch((error) => {
        reply.json({message: error});
    }); 
}

exports.updateProgram = async(request, reply) => {
    //update program by id
    id=request.body.id;
    update=request.body;

   program=await Programs.findOne({
       where: {
           id: id
       }
   });
   if (request.body.name){
       program.name=request.body.name;
   }
    if (request.body.price){
         program.price=request.body.price;
    }
    if (request.body.quantity){
        program.quantity=request.body.quantity;
    }
    if (request.body.description){
        program.description=request.body.description;
    }
    program.save();
   
    reply.json({message: "Updated successfully"});


}


