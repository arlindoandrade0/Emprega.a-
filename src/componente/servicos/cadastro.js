
import axios from "axios";


const cadastroAPI = axios.create({ baseURL: "http://localhost:3000/cadastro/" });

async function getCadastro(){
   

    const response = await cadastroAPI.get('/')

    return response.data
}

//
export{
    getCadastro
}