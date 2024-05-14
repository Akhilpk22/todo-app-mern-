// API  and URLs
import { BASE_URL } from "./baseUrI";
import { commonAPI } from "./commonAPI";

// ALL API call 

// register
export const registerAPI =async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login
export const loginAPI =async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

// add projects 
export const addtodoAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/todo/add`,reqBody,reqHeader)

 }

 // user projects 
export const usertodoAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-projects`,"",reqHeader)

}
