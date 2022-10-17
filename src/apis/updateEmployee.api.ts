import axios from "axios";

const updateEmployee = async(objectId:string, employee:any)=>{
    const url = 'http://localhost:3001/api/update-employee/';
    let config = {
       id:objectId,
       firstName:employee.firstName,
       lastName:employee.lastName,
       salary:employee.salary,
       age:employee.age,
       emailId:employee.emailId
    }
    let results;
    try{
        const response = await axios.put(url, config);
        results = response;
    }catch(err){
        results = err;
    }
    return results;
}

export default updateEmployee;