import axios from "axios";

const deleteEmployee = async(objectId:string):Promise<any> =>{
  const url = 'http://localhost:3001/api/delete-employee/' ;
  const config = {
    id:objectId
  }
  let result;
  try{
    const response = await axios.delete(url, {data:config});
    result = response;
  }catch(err){
    result = err;
  }
  return result;
}

export default deleteEmployee;