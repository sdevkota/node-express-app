const axios=require(axios);
const baseURL=process.env.NODE_API_URL || "http://localhost:9200";
module.exports=axios.create({
    baseURL:baseURL,
    timeout:30000,
    withCredentials:true,
    headers:{
        "content-type": "application/json"
    }
});