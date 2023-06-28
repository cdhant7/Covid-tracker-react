import axios from "axios";

const url='https://api.covidtracking.com/v1/us/daily.json'

export const fetchData=async () =>{
    try {
        const response=await axios.get(url);
        
        return response;

    } catch (error) {
        
    }
}