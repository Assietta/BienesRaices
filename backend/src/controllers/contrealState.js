const { Router } = require('express');
const router = Router();


const getRealState = async (name) => {
    try {
        const realStateApi = await axios.get(
            "https://www.tokkobroker.com/api/v1/development/?lang=es_ar&format=json&limit=20&offset=1&key=b5ecdd05e6bffe9338822491fb3406d32dda03af"
          );
        
          promiseRequest = await promiseRequest.map((e) => {
            return {
              id: e.data.id,
              name: e.data.name,
              hp: e.data.stats[0].base_stat,
              attack: e.data.stats[1].base_stat,
              defense: e.data.stats[2].base_stat,
              speed: e.data.stats[5].base_stat,
              height: e.data.height,
              weight: e.data.weight,
              image:
                e.data.sprites.versions["generation-v"]["black-white"]
                  .front_default,
              createInDb: "false",
              types: e.data.types.map((e) => {
                return { name: e.type.name };
              }),
            };
          });
          return promiseRequest;//retorna el array de pokemons de la api
        }

        catch (error) {
            console.log(error);
          }
        };

        module.exports={
            getRealState
        }