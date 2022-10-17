import axios from 'axios';

const getEmployees = async():Promise<any>=> {
   const url = 'http://localhost:3001/api/get-employees/';
   let result;

   try{
    const response = await axios(url);
    result = response;
   }catch(err){
    result = err;
   }
   
   return result;
}

export default getEmployees;