const axios=require("../config/apiSetup");

const getData=()=>{
    axios.get("/test", {params: ""})
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log(error.message);
    })
};
export {getData}