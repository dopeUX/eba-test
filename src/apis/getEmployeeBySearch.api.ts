import axios from "axios";

const getEmployeesBySearch = async(searchQuery:string):Promise<any> =>{
  const url = 'http://localhost:3001/api/get-employee-by-search';  
  const headers = {
    params:{
        searchQuery
    }
  }
  let result;
  try{
    const response = await axios(url, headers);
    result = response;
  }
  catch(err){
    result = err;
  }
  return result;
}

export default getEmployeesBySearch;