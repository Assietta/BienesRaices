import axios from "axios"


export default function SubirArchivo (){



    const imageUpload = (event) =>{
        const fetchImage = async () => {
            try {
              const response = await axios.post(`http://localhost:3001/upload`,event.target.file);
              const data = response.data;
console.log(data);
            } catch (error) {
                // Manejar el error de la solicitud
                console.error(error);}

    }
}

    return(
        <input type="file" onChange={imageUpload} />
    )
}