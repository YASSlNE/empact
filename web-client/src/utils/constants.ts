export const baseUrl = 'http://localhost:4444'
export let token = "";
export const getJwtToken = () : string => `Bearer ${token}`;