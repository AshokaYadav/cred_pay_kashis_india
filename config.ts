// config.ts
export let API_TOKEN = "";

export let API_URL="https://api.recharge.kashishindiapvtltd.com";

export let USER_ID="";

// User ka pura object store karne ke liye
export let USER_DATA: {
  token: string;
  user: {
    userId: string;
    name: string;
    email: string;
    mobile: string;
    city: string;
    role: string;
    status: string;
    admin_id?: string | null;
    distributor_id?: string | null;
    gram_id?: string | null;
    ip?: string;
    latitude?: string;
    longitude?: string;
    mpin?: string;
    otp?: string;
  } | null;
} | null = null;





// Save data
export const setUserData = (data: any) => {
  USER_DATA = data;
};

// Get full object
export const getUserData = () => USER_DATA;




export const getToken = () => API_TOKEN;

export const setToken = (token: string) => {
  API_TOKEN = token;
};

export const setUserId = (userId: string) => {
  USER_ID = userId;
};



























// {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNjFlZjgwZi0xMzFjLTQ1YzEtOGFjMi05MmY2NmE5YjJiMzAiLCJtb2JpbGUiOiI4NTAyODUzNzM3IiwiZW1haWwiOiJkaHJ1dkBnbWFpbC5jb20iLCJpcCI6IjE4My44My41NC4zNiIsImxvbmdpdHVkZSI6IiIsImxhdGl0dWRlIjoiIiwibXBpbiI6IiQyYiQxMCR2WUZGTUVyUi9yYkEwNTlaaTV0TlBPcFZkcHc1Mk5pMUNWRXoyZmtOSlo5S2xqS1NSQmhiVyIsIm5hbWUiOiJkaHJ1diIsImNpdHkiOiJLYXNoaXNoaW5kaWEiLCJhZG1pbl9pZCI6bnVsbCwiZGlzdHJpYnV0b3JfaWQiOm51bGwsInN0YXR1cyI6IkFDVElWRSIsInJvbGUiOiJBUFBfVVNFUiIsImdyYW1faWQiOm51bGwsIm90cCI6IiQyYiQxMCRNMm03dWhXZVhGVWhNY2NNY05XeXMuMkxjTmhTelJRQmhiaDM1QkdnL1l0RkVPM1N0aGk4RyIsImlhdCI6MTc1Njc5NzI1NSwiZXhwIjoxNzU2ODAwODU1LCJhdWQiOiJSRVRBSUxFUiIsImlzcyI6IkFETUlOIn0.Pk9lXd9dcEgUu-0SpwMnBxh5v9hND9h8KQtZeIMHmdo', user: {…}}
// token
// : 
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNjFlZjgwZi0xMzFjLTQ1YzEtOGFjMi05MmY2NmE5YjJiMzAiLCJtb2JpbGUiOiI4NTAyODUzNzM3IiwiZW1haWwiOiJkaHJ1dkBnbWFpbC5jb20iLCJpcCI6IjE4My44My41NC4zNiIsImxvbmdpdHVkZSI6IiIsImxhdGl0dWRlIjoiIiwibXBpbiI6IiQyYiQxMCR2WUZGTUVyUi9yYkEwNTlaaTV0TlBPcFZkcHc1Mk5pMUNWRXoyZmtOSlo5S2xqS1NSQmhiVyIsIm5hbWUiOiJkaHJ1diIsImNpdHkiOiJLYXNoaXNoaW5kaWEiLCJhZG1pbl9pZCI6bnVsbCwiZGlzdHJpYnV0b3JfaWQiOm51bGwsInN0YXR1cyI6IkFDVElWRSIsInJvbGUiOiJBUFBfVVNFUiIsImdyYW1faWQiOm51bGwsIm90cCI6IiQyYiQxMCRNMm03dWhXZVhGVWhNY2NNY05XeXMuMkxjTmhTelJRQmhiaDM1QkdnL1l0RkVPM1N0aGk4RyIsImlhdCI6MTc1Njc5NzI1NSwiZXhwIjoxNzU2ODAwODU1LCJhdWQiOiJSRVRBSUxFUiIsImlzcyI6IkFETUlOIn0.Pk9lXd9dcEgUu-0SpwMnBxh5v9hND9h8KQtZeIMHmdo"
// user
// : 
// admin_id
// : 
// null
// city
// : 
// "Kashishindia"
// distributor_id
// : 
// null
// email
// : 
// "dhruv@gmail.com"
// gram_id
// : 
// null
// ip
// : 
// "183.83.54.36"
// latitude
// : 
// ""
// longitude
// : 
// ""
// mobile
// : 
// "8502853737"
// mpin
// : 
// "$2b$10$vYFFMErR/rbA059Zi5tNPOpVdpw52Ni1CVEz2fkNJZ9KljKSRBhbW"
// name
// : 
// "dhruv"
// otp
// : 
// "$2b$10$M2m7uhWeXFUhMccMcNWys.2LcNhSzRQBhbh35BGg/YtFEO3Sthi8G"
// role
// : 
// "APP_USER"
// status
// : 
// "ACTIVE"
// userId
// : 
// "261ef80f-131c-45c1-8ac2-92f66a9b2b30"

// export let User_Data:any;

// export const setUserData=(){

// }