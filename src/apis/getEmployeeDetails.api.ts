import axios from "axios";

const getEmployeeDetails = async(objectId:string):Promise<any> =>{
    const url = 'http://localhost:3001/api/get-employee-details';
    const config = {
        params:{
            id:objectId
        }
    }
    let result ;
    try{
        let response = await axios.get(url, config);
        result = response;
    }catch(err){
        result = err;
    }
    return result;
}

export default getEmployeeDetails;