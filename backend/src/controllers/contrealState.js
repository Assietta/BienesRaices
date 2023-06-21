const { Router } = require('express');
const router = Router();
const axios = require('axios');


const getRealState = async (name) => {
    try {
        const realStateApi = await axios(
            "https://www.tokkobroker.com/api/v1/development/?lang=es_ar&format=json&limit=1&offset=1&key=b5ecdd05e6bffe9338822491fb3406d32dda03af"
          );
        
          
          return realStateApi
        }

        catch (error) {
            console.log(error);
          }
        };

        module.exports={
            getRealState
        }