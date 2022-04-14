import Axios from 'axios'

const apiClient = Axios.create({
  baseURL: 'https://api.staging.guidedsteps.com',
  // withCredentials: false,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ5MTczNDkyLCJleHAiOjE2ODA3MzEwOTJ9.us8ea-neRKRHnyJ-KkPiU_L4PtbjQMVXMSssoPfOcAkZie2Mfkc18pKi0M6bE_bGqssUUXgpB6H_mfzJDTBLNw',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
export default () => ({
 cloudinaryUpload(payload){
    return apiClient.post('api/v1/cloudinary/upload', payload)
  },
 cloudinaryGet(){
    return apiClient.get('api/v1/cloudinary/data')
 }
})
