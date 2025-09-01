// config.ts
// export const API_TOKEN ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYWZjMmYyMi0wZmU4LTRkNjEtODc5ZS1hNGEzMWM4OTI2OTgiLCJtb2JpbGUiOiI5ODc2NTE0MjU0IiwiZW1haWwiOiJ5YXNob2thNTFAZ21haWwuY29tIiwiaXAiOiIxODMuODMuNTUuOTUiLCJsb25naXR1ZGUiOiIiLCJsYXRpdHVkZSI6IiIsIm1waW4iOiIkMmIkMTAkYnk5VFB3TXZJZzI1M3lpZ0txcVVJZWh5UnJlMllDUXp6Sm9STExyZVJHMUkzM0pCaFIwRWEiLCJuYW1lIjoiYXNob2sgeWFkYXYiLCJjaXR5IjoiYW1iYWxhIiwiYWRtaW5faWQiOm51bGwsImRpc3RyaWJ1dG9yX2lkIjpudWxsLCJzdGF0dXMiOiJBQ1RJVkUiLCJyb2xlIjoiQVBQX1VTRVIiLCJncmFtX2lkIjpudWxsLCJvdHAiOiIkMmIkMTAkdUFUdHk3WjVIYzI3QTQvZzJnOENmZXMwVzNQemc5TjJEOXcwaVVBRHF4dlVUMlMvdEMwd1MiLCJpYXQiOjE3NTQ0ODExNjAsImV4cCI6MTc1NDQ4NDc2MCwiYXVkIjoiUkVUQUlMRVIiLCJpc3MiOiJBRE1JTiJ9.AkYfJD1CnJXPxZ3ZYIOwcnwHAuzkMT0DplVcye8tEoA'


// config.ts
export let API_TOKEN = "";

export let API_URL="https://api.recharge.kashishindiapvtltd.com";

export let USER_ID="";


// export const getToken = () => API_TOKEN;

export const setToken = (token: string) => {
  API_TOKEN = token;
};

export const setUserId = (userId: string) => {
  USER_ID = userId;
};
