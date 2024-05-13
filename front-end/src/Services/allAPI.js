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