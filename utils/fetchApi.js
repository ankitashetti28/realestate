import axios from "axios";
export const baseUrl ='https://bayut.p.rapidapi.com'


    
  

  export const fetchApi = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '03380a1bf4mshb3f7c309d6dadcdp1d2192jsne287d4f12210',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          } 

    }); 
    return data;
  }

  