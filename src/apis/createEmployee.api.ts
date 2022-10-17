import axios from 'axios';

const createEmployee = async(firstName:String, lastName:string, salary:number|null|string, age:number|null|string, emailId:string):Promise<any> => {
   const url = 'http://localhost:3001/api/create-employee/' ;
   let result;
   const employee = {
    firstName,
    lastName,
    salary,
    age,
    emailId
   }
   try{
     let response = await axios.post(url, employee);
     result = response;
   }catch(err){
     result = err;
   }
   return result;
}

export default createEmployee;