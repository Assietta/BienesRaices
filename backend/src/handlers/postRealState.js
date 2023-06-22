// const { postRealState } = require('../controllers/contpostrealState.js');
const { RealState } = require("../db.js");

const postRealStateHandler=async (req, res)=>{
    try {
        const { name, mail, password } =
          req.body;
        const findInmueble = await RealState.findOne({
          where: { name: name.toLowerCase() },//ver esto de lowerCase
        });//Solo se fija si existe entre los creados
        if (findInmueble) {
          res.status(400).send("Property already publicated");
        } else {
          let newPubication = await RealState.create({
            name: name.toLowerCase(),
            mail: mail,
            password: password,
          });
          res.status(200).send("publicated!");
          //.json(newPubication); // esto no hace falta por eso lo comento 
    
        }
      } catch (error) {
        console.log(error);
      }
}

module.exports={

    postRealStateHandler
}